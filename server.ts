import app from './src/app';
const port = 8000;

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
