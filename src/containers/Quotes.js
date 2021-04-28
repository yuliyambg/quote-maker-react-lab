import React, { Component } from "react";
import { connect } from "react-redux";
import QuoteCard from "../components/QuoteCard";
import { upvoteQuote, downvoteQuote, removeQuote } from "../actions/quotes";

class Quotes extends Component {
  render() {
    let quotes = this.props.quotes.map((quote) => {
      return (
        <QuoteCard
          key={quote.id}
          {...quote}
          upvote={() => this.props.upvote(quote)}
          downvote={() => this.props.downvote(quote)}
          remove={() => this.props.remove(quote)}
        />
      );
    });
    return (
      <div>
        <hr />
        <div className="row justify-content-center">
          <h2>Quotes</h2>
        </div>
        <hr />
        <div className="container">
          <div className="row">
            <div className="col-md-4">{quotes}</div>
          </div>
        </div>
      </div>
    );
  }
}

export default connect(
  (state) => {
    return { quotes: state.quotes };
  },
  { upvote: upvoteQuote, downvote: downvoteQuote, remove: removeQuote }
)(Quotes);
