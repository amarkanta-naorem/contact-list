function TotalFavorite ({ contacts }) {

    let  totalFavorite = 0;

    for (let i = 0; i < contacts.length; i++) {
        if (contacts[i].favorite === true) {
            totalFavorite = totalFavorite + 1
        }
    }

    return (
        <p>Total Favorite: {totalFavorite}</p>
    );
}

export default TotalFavorite