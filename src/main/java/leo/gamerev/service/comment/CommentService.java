package leo.gamerev.service.comment;

import leo.gamerev.domain.Comment;

import java.util.Date;
import java.util.List;

public interface CommentService {
    List<Comment> findAll();

    Comment saveComment(Comment Comment);

    void deleteComment(Long id);
}
