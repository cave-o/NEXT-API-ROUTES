import BookForm from "@/cmps/book-form"

function Book() {
    return (
        <div className="book">
            <div className="heading">
                <h1>book</h1>
            </div>
            <h1 className="heading-title">book your trip!</h1>
            <BookForm />
        </div>
    )
}

export default Book