from fastapi import FastAPI

# Create a FastAPI app instance
app = FastAPI()

# Define a route for the root URL
@app.get("/")
async def read_root():
    return {"message": "Hello everyone, Welcome to the KEDA session!"}

# Run the app with uvicorn server
if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=80)
