package com.comssanet.comssanet.domain;

import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.enums.LoginType;
import com.comssanet.comssanet.enums.Role;
import lombok.*;

import javax.persistence.*;


@Entity
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
@Builder
public class Board extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne
    @JoinColumn(name = "member_id")
    private Member member;

    private String title;

    private String description;


    @Enumerated(EnumType.STRING)
    private BoardType boardType;
}
