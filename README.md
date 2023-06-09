# Grapycal

![image](https://github.com/eri24816/Grapycal/assets/30017117/a67353e0-1818-4e5f-a670-6b21efda8cb5)



## Installation (for Development)

backend:

```
cd backend
poetry install
```

frontend:

```
cd frontend
npm install
```

## Dependencies

Grapycal and its dependences consist of the following 6 packages:

- [Grapycal/backend](https://github.com/eri24816/Grapycal): Included in this repo, including the backend code of the Grapycal main application

- [Grapycal/frontend](https://github.com/eri24816/Grapycal): Included in this repo, including the frontend code of the Grapycal main application


- [Chatroom](https://github.com/eri24816/ChatRoom) and [ObjectSync](https://github.com/eri24816/ObjectSync): Backend dependencies. Python packages.

- [ChatroomClient_ts](https://github.com/eri24816/ChatRoomClient_ts) and [ObjectSyncClient_ts](https://github.com/eri24816/ObjectSyncClient_ts): Frontend dependencies. npm packages.

While installing the npm packages, please use `npm link` and `npm link <package name>` to manually link `ChatroomClient_ts` to `ObjectSyncClient_ts`, and `ObjectSyncClient_ts` to `Grapycal`.

now can run `npm install` in `frontend` folder, instead of using `npm link <package name>`.
Remember to run `npm update` in `frontend` folder and `poetry update` in `backend` folder when any of `chatroom` and `objectsync` dependencies is updated.

## Run App (for Development)

1. run Grapycal server
```
cd backend
scripts/run.sh
```

2. run web server
```
cd frontend
npm run app
```

3. Go to `localhost:9001` with a web browser.
