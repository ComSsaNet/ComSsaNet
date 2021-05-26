package com.comssanet.comssanet.dto;


import com.comssanet.comssanet.enums.BoardType;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class BoardWriteDTO {
    private Long userId;
    private String title;
    private String description;
    private BoardType boardType;
}
