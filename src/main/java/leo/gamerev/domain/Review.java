package leo.gamerev.domain;

import lombok.*;

import javax.persistence.Entity;
import javax.validation.constraints.Max;
import javax.validation.constraints.Min;
import javax.validation.constraints.NotBlank;

@Entity
@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode(callSuper = true)
public class Review extends BaseEntity<Long>{
    @NotBlank(message = "Game Slug cannot be empty")
    private String gameSlug;

    @Min(value=1, message = "Rating must be higher than 1")
    @Max(value=10, message = "Rating must be lower than 10")
    private float rating;

    @Min(value=0, message = "Number must be higher than 0")
    private int numberOfVotes;

    @Override
    public String toString() {
        return "Review{" +
                "gameSlug='" + gameSlug + '\'' +
                ", rating=" + rating +
                ", numberOfVotes=" + numberOfVotes +
                '}';
    }
}
