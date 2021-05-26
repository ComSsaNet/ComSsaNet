package com.comssanet.comssanet.dto;

import com.comssanet.comssanet.enums.LoginType;
import com.comssanet.comssanet.enums.Role;
import lombok.*;

import javax.persistence.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class MemberDTO {

    private String password;

    private String nickname;

    private LoginType loginType;
}
