package leo.gamerev.service.comment;

import leo.gamerev.domain.Comment;
import leo.gamerev.repository.CommentRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CommentServiceImpl implements CommentService {
    private static final Logger log = LoggerFactory.getLogger(CommentServiceImpl.class);


    @Autowired
    private CommentRepository commentRepository;

    @Override
    public List<Comment> findAll() {
        log.trace("findAll --- method entered");
        List<Comment> Comments = commentRepository.findAll();
        log.trace("findAll --- method finished ; Comments={}", Comments);
        return Comments;
    }

    @Override
    public Comment saveComment(Comment comment) {
        log.trace("saveComment --- method entered ; comment={}", comment);
        this.commentRepository.save(comment);
        log.trace("saveComment --- method finished");
        return comment;
    }

    @Override
    public void deleteComment(Long id) {
        log.trace("deleteComment --- method entered");
        commentRepository.deleteById(id);
        log.trace("deleteComment --- method finished");
    }
}
