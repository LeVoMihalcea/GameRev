package leo.gamerev.domain;

import lombok.*;
import javax.validation.constraints.NotBlank;

import javax.persistence.Entity;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Review extends BaseEntity<Long>{
    //todo: not returning a message
    @NotBlank(message = "Game Slug cannot be empty")
    private String gameSlug;

    @NotBlank(message = "Comment cannot be empty")
    private String comment;

    @Min(value=1, message = "Rating must be higher than 1")
    @Max(value=10, message = "Rating must be lower than 10")
    private float rating;

    @Min(value=0, message = "Number must be higher than 0")
    private int numberOfVotes;

    @Override
    public String toString() {
        return "Review{" +
                "gameSlug='" + gameSlug + '\'' +
                ", comment='" + comment + '\'' +
                ", rating=" + rating +
                ", numberOfVotes=" + numberOfVotes +
                '}';
    }
}
