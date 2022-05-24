import React from "react";
import { connect } from "react-redux";
import { addToCard } from '../context/action';

function Home () {
    return (
        <div className="container">
            <h3>Home</h3>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCard: (id) => {dispatch(addToCard(id))}
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Home);