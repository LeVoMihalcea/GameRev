package leo.gamerev.service.review;

import leo.gamerev.domain.Review;
import leo.gamerev.repository.ReviewRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ReviewServiceImplementation implements ReviewService {
    private static final Logger log = LoggerFactory.getLogger(ReviewServiceImplementation.class);


    @Autowired
    private ReviewRepository reviewRepository;

    @Override
    public List<Review> findAll() {
        log.trace("findAll --- method entered");
        List<Review> reviews = reviewRepository.findAll();
        log.trace("findAll --- method finished ; reviews={}", reviews);
        return reviews;
    }

    @Override
    public Review saveReview(Review review) {
        log.trace("saveReview --- method entered ; review={}", review);
        Optional<Review> reviewByGameSlug = reviewRepository.findByGameSlug(review.getGameSlug());
        Review toSave = null;
        if (reviewByGameSlug.isPresent()) {
            toSave = reviewByGameSlug.get();
            toSave.setRating((review.getRating() + toSave.getRating()
                    * toSave.getNumberOfVotes())
                    / (toSave.getNumberOfVotes() + 1));
            toSave.setNumberOfVotes(toSave.getNumberOfVotes() + 1);
        }
        else{
            toSave = review;
            toSave.setNumberOfVotes(1);
        }
        reviewRepository.save(toSave);
        log.trace("saveReview --- method finished");
        return toSave;
    }

    @Override
    public Review updateReview(Long reviewId, String gameSlug, Float rating) {
        log.trace("updateReview: id={}, gameSlug={}, rating={}",
                reviewId, gameSlug, rating);

        Optional<Review> foundReview = reviewRepository.findById(reviewId);

        foundReview.ifPresent(review -> {
            review.setGameSlug(gameSlug);
            review.setRating(rating);
        });

        log.trace("update review --- method finished");

        return foundReview.orElse(null);
    }

    @Override
    public Optional<Review> findOne(String gameSlug) {
        log.trace("findOne: gameSlug={}", gameSlug);
        return this.reviewRepository.findByGameSlug(gameSlug);
    }

    @Override
    public void deleteReview(Long id) {
        log.trace("deleteReview --- method entered");
        reviewRepository.deleteById(id);
        log.trace("deleteReview --- method finished");
    }
}
