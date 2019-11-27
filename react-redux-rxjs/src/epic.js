import { combineEpics, ofType } from 'redux-observable';
import { ajax } from 'rxjs/ajax';
import { map, mergeMap,switchMap,mergeAll, switchAll,retry, takeUntil } from 'rxjs/operators';
import 'rxjs/operators/map';
import 'rxjs/operators/mergeAll';
import { FETCH_DATA, fetchDataSuccess } from "./action";

const loadData = (action$) => {
  return action$.pipe(
    ofType(FETCH_DATA),
    map(action => {
        console.log(action);
        return ajax.getJSON(`https://reqres.in/api/users?id=${action.payload.userId}`).pipe(

          map(userInfo => {
            console.log(userInfo);
            return fetchDataSuccess(userInfo);
          }),
          // takeUntil(action$.ofType(FETCH_DATA)),
          // retry(2),
        );
      }),
    mergeAll(),
  );
};

export default combineEpics(loadData);