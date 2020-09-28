package leo.gamerev.service;

import leo.gamerev.domain.Review;

import java.util.List;
import java.util.Optional;

public interface ReviewService {
    List<Review> findAll();

    Review saveReview(Review review);

    Review updateReview(Long reviewId, String gameSlug, String comment, Float rating);

    Optional<Review> findOne(String gameSlug);

    void deleteReview(Long id);
}
