<div class="boxed">
        <div>
            <a class="btn btn-success btn-md" href="/blogs/<%= blog._id %>/comments/new" role="button">ADD COMMENT</a>
        </div>
        <hr>
        <% blog.comments.forEach(function(comment){ %>
            <div class="row">
                <% if (currentUser) { %>
                <div class="col-md-10">
                    <strong><%= comment.author %></strong>
                    <span> <em> - (<%= comment.created %>)</em></span>
                    <p>
                        <%= comment.text %>
                    </p>
                </div>
                <div class="col-md-2">
                    <form action="/blogs/<%= blog._id %>/comments/<%= comment._id %>?_method=DELETE" method="POST">
                        <button class="btn btn-sm btn-info">Delete</button>
                    </form>
                </div>
                <% } else { %>
                <div class="col-md-12">
                    <strong><%= comment.author %></strong>
                    <span> <em> - (<%= comment.created %>)</em></span>
                    <p>
                        <%= comment.text %>
                    </p>
                </div>
                <% } %>
            </div>
        <% }) %>
    </div>