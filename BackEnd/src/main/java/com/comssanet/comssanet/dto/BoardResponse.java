package com.comssanet.comssanet.dto;


import com.comssanet.comssanet.enums.BoardType;
import lombok.*;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class BoardResponse {
    private Long boardId;
    private Long memberId;
    private String title;
    private String description;
    private BoardType boardType;
}
