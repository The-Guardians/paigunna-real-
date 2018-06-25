package com.paigunna.api.service;

import com.paigunna.api.domain.User;
import com.paigunna.api.repo.UserRepo;
import com.paigunna.api.resource.dto.VehicleDto;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Service;

import javax.sql.DataSource;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * @author Arm
 */
@Service
public class VehicleNearbyServiceImpl implements VehicleNearbyService {

    private static final int RADIUS = 20;//kilometers

    private static final int NUMBER_OF_RECORDS = 20;

    private JdbcTemplate jdbcTemplate;

    @Autowired
    private UserRepo userRepo;

    @Autowired
    private UserService userService;

    @Autowired
    public void setDataSource(DataSource dataSource) {
        jdbcTemplate = new JdbcTemplate(dataSource);
    }

    @Override
    public List<VehicleDto> findByUserIdAndDistanceAndVehicleType(String userId, Long distance, String vehicleType) {
        User user = userService.getUser(userId);
        if (user.getLat() == null || user.getLng() == null) {
            throw new RuntimeException("Please open gps.");
        }

        String query = "select u.lat, "
                + "       u.lng, "
                + "       u.id, "
                + "       v.license, "
                + "       concat(u.fname, ' ', u.lname) as name,  "
                + "       v.province, "
                + "       t.rate, "
                + "       t.description type_desc, "
                + "       u.distance   "
                + "          "
                + "from ( "
                + "    SELECT u.*,  "
                + "           ( " + RADIUS + " * acos( cos( radians(?) ) * cos( radians( u.lat ) ) * cos( radians( u.lng ) - radians(?) ) + sin( radians(?) ) * sin( radians( u.lat ) ) ) ) AS distance  "
                + "    FROM user u "
                + "    where u.id <> ? "
                + "    HAVING distance < ? "
                + "    LIMIT 0 , " + NUMBER_OF_RECORDS + " "
                + ") u "
                + " "
                + "inner join vehicle v "
                + "on (u.id = v.owner) "
                + " "
                + "inner join vehicle_type t "
                + "on (v.type = t.id)   ";

        return jdbcTemplate.queryForObject(query, new Object[]{
                user.getLat(),
                user.getLng(),
                user.getLat(),
                userId,
                distance
        }, new RowMapper<List<VehicleDto>>() {
            @Override
            public List<VehicleDto> mapRow(ResultSet rs, int i) throws SQLException {
                List<VehicleDto> result = new ArrayList<>();
                while (rs.next()) {
                    VehicleDto dto = new VehicleDto();
                    dto.setLatitude(rs.getDouble("gps_lat"));
                    dto.setLongitude(rs.getDouble("gps_lng"));
                    dto.setId(rs.getLong("id"));
                    dto.setLicense(rs.getString("license"));
                    dto.setProvince(rs.getString("province"));
                    dto.setRate(rs.getBigDecimal("rate"));
                    dto.setType(rs.getString("type_name"));
                    dto.setTypeDesc(rs.getString("type_desc"));
                    dto.setDistance(rs.getDouble("distance"));
                    result.add(dto);
                }
                return result;
            }

        });
    }
}
