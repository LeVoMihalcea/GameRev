package leo.gamerev.repository;

import leo.gamerev.domain.Review;

import java.util.Optional;

public interface ReviewRepository extends GeneralRepository<Review, Long> {
    Optional<Review> findByGameSlug(String gameSlug);
}
