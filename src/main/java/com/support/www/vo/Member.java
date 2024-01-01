package com.support.www.vo;
import java.time.LocalDateTime;

import com.fasterxml.jackson.annotation.JsonFormat;

import lombok.Data;

@Data
public class Member {
    private Long memberId;
    private String username;
    private String email;
    private String password;
    private String fullName;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm:ss")
    private LocalDateTime  registrationDate;
    private String memberGrade;
}
