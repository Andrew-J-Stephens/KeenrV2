/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateChallenge = /* GraphQL */ `
  subscription OnCreateChallenge {
    onCreateChallenge {
      id
      title
      type
      active
      posts {
        items {
          id
          filename
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          challengePostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onUpdateChallenge = /* GraphQL */ `
  subscription OnUpdateChallenge {
    onUpdateChallenge {
      id
      title
      type
      active
      posts {
        items {
          id
          filename
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          challengePostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onDeleteChallenge = /* GraphQL */ `
  subscription OnDeleteChallenge {
    onDeleteChallenge {
      id
      title
      type
      active
      posts {
        items {
          id
          filename
          username
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          challengePostsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
    }
  }
`;
export const onCreatePost = /* GraphQL */ `
  subscription OnCreatePost {
    onCreatePost {
      id
      filename
      username
      challenge {
        id
        title
        type
        active
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          userID
          username
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengePostsId
    }
  }
`;
export const onUpdatePost = /* GraphQL */ `
  subscription OnUpdatePost {
    onUpdatePost {
      id
      filename
      username
      challenge {
        id
        title
        type
        active
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          userID
          username
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengePostsId
    }
  }
`;
export const onDeletePost = /* GraphQL */ `
  subscription OnDeletePost {
    onDeletePost {
      id
      filename
      username
      challenge {
        id
        title
        type
        active
        posts {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
      }
      comments {
        items {
          id
          userID
          username
          content
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
          postCommentsId
        }
        nextToken
        startedAt
      }
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      challengePostsId
    }
  }
`;
export const onCreateComment = /* GraphQL */ `
  subscription OnCreateComment {
    onCreateComment {
      id
      userID
      username
      post {
        id
        filename
        username
        challenge {
          id
          title
          type
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengePostsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
    }
  }
`;
export const onUpdateComment = /* GraphQL */ `
  subscription OnUpdateComment {
    onUpdateComment {
      id
      userID
      username
      post {
        id
        filename
        username
        challenge {
          id
          title
          type
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengePostsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
    }
  }
`;
export const onDeleteComment = /* GraphQL */ `
  subscription OnDeleteComment {
    onDeleteComment {
      id
      userID
      username
      post {
        id
        filename
        username
        challenge {
          id
          title
          type
          active
          createdAt
          updatedAt
          _version
          _deleted
          _lastChangedAt
        }
        comments {
          nextToken
          startedAt
        }
        createdAt
        updatedAt
        _version
        _deleted
        _lastChangedAt
        challengePostsId
      }
      content
      createdAt
      updatedAt
      _version
      _deleted
      _lastChangedAt
      postCommentsId
    }
  }
`;
