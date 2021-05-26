package com.comssanet.comssanet.domain;

import com.comssanet.comssanet.enums.BoardType;
import com.comssanet.comssanet.enums.LoginType;
import com.comssanet.comssanet.enums.Role;
import lombok.*;

import javax.persistence.*;

@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
@Getter
@ToString
public class Board extends BaseEntity{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long boardId;

    @ManyToOne
    @JoinColumn(updatable = false)
    private Member member;

    private String title;

    private String description;


    @Enumerated(EnumType.STRING)
    private BoardType boardType;

    public void writeMember(Member member) {
        this.member = member;
    }
}
