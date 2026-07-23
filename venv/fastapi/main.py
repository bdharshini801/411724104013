from fastapi import FastAPI
from Router import router
app = FastAPI()
app.include_router(router)