const Container = ({children}) => {
    return (
        <div className="max-w-screen-2xl mx-auto px-6 md:px-6 py-2">
            {children}
            <p>hello world </p>
        </div>
    );
};

export default Container;