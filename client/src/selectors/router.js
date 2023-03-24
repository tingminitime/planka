import { createSelector as createReselectSelector } from 'reselect';
import { createSelector as createReduxOrmSelector } from 'redux-orm';

import orm from '../orm';
import { selectCurrentUserId } from './users';
import matchPaths from '../utils/match-paths';
import Paths from '../constants/Paths';

export const selectPathname = ({
  router: {
    location: { pathname },
  },
}) => pathname;

export const selectPathsMatch = createReselectSelector(selectPathname, (pathname) =>
  matchPaths(pathname, Object.values(Paths)),
);

export const selectPath = createReduxOrmSelector(
  orm,
  selectPathsMatch,
  (state) => selectCurrentUserId(state),
  ({ Project, Board, Card }, pathsMatch, currentUserId) => {
    if (pathsMatch) {
      switch (pathsMatch.pattern.path) {
        case Paths.PROJECTS: {
          const projectModel = Project.withId(pathsMatch.params.id);

          if (!projectModel || !projectModel.isAvailableForUser(currentUserId)) {
            return {
              projectId: null,
            };
          }

          return {
            projectId: projectModel.id,
          };
        }
        case Paths.BOARDS: {
          const boardModel = Board.withId(pathsMatch.params.id);

          if (!boardModel || !boardModel.isAvailableForUser(currentUserId)) {
            return {
              boardId: null,
              projectId: null,
            };
          }

          return {
            boardId: boardModel.id,
            projectId: boardModel.projectId,
          };
        }
        case Paths.CARDS: {
          const cardModel = Card.withId(pathsMatch.params.id);

          if (!cardModel || !cardModel.isAvailableForUser(currentUserId)) {
            return {
              cardId: null,
              boardId: null,
              projectId: null,
            };
          }

          return {
            cardId: cardModel.id,
            boardId: cardModel.boardId,
            projectId: cardModel.board.projectId,
          };
        }
        default:
      }
    }

    return {};
  },
);

export default {
  selectPathname,
  selectPathsMatch,
  selectPath,
};
