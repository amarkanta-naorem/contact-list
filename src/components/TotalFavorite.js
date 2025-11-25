function TotalFavorite ({ contacts }) {

    let  totalFavorite = 0;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].favorite === true) {
            totalFavorite = totalFavorite + 1
        }
    }

    return (
        <p className="my-5">Total Favorite: <span className="bg-teal-600 p-2 rounded-full">{totalFavorite}</span></p>
    );
}

export default TotalFavorite