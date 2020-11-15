package leo.gamerev.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.validation.constraints.NotBlank;
import javax.validation.constraints.NotNull;
import java.util.Date;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Comment extends BaseEntity<Long>{
    @NotBlank(message = "Game Slug cannot be empty")
    private String gameSlug;

    @NotBlank(message = "Comment text can't be empty")
    private String comment;

    @NotNull(message = "Date can't be null")
    private Date date;

    @Override
    public String toString() {
        return "Comment{" +
                "gameSlug='" + gameSlug + '\'' +
                ", comment='" + comment + '\'' +
                ", date=" + date +
                '}';
    }
}
