class EmailCapture extends React.Component {

    render() {
        return (
            <div>
                <div>Hello WORLD!</div>
                <div>
                    <form method="post" action="/email">
                        <label htmlFor="email">Email: </label><input id="email" type="text" name="email"></input>
                        <input type="submit" value="Submit"></input>
                    </form>
                </div>
            </div>
        );
    }
}

