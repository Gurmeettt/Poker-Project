import React from "react";
import { Grid, Button, Typography, TextField } from "@material-ui/core";
import CompareIcon from "@material-ui/icons/Compare";

class Homepage extends React.Component {
  state = {
    playerOneCards: "",
    playerTwoCards: "",
    winner: null,
  };

  render() {
    const setPlayerOneCards = (event) => {
      this.setState({
        playerOneCards: event.target.value,
      });
    };

    const setPlayerTwoCards = (event) => {
      this.setState({
        playerTwoCards: event.target.value,
      });
    };
    const compareCards = () => {
      let firstPlayerCards = this.state.playerOneCards;
      let secondPlayerCards = this.state.playerTwoCards;
      //   let numValueRefined = numValue.replace(/[c]|[C]|[d]|[D]|[s]|[S]|[h][H]/g, "");

      // 9 means straight flush
      const checkFirstStraightFlush = () => {
        if (
          checkFlush(firstPlayerCards) + checkStraight(firstPlayerCards) >
          10
        ) {
          return 9;
        } else {
          return -1;
        }
      };
      const checkSecondStraightFlush = () => {
        if (
          checkFlush(secondPlayerCards) + checkStraight(secondPlayerCards) >
          10
        ) {
          return 9;
        } else {
          return -1;
        }
      };

      let playerOne = [
        checkFlush(firstPlayerCards),
        checkStraight(firstPlayerCards),
        checkForRepeats(firstPlayerCards),
        checkFirstStraightFlush(),
      ];

      let playerTwo = [
        checkFlush(secondPlayerCards),
        checkStraight(secondPlayerCards),
        checkForRepeats(secondPlayerCards),
        checkSecondStraightFlush(),
      ];

      let playerOnePoints = Math.max(...playerOne);
      let playerTwoPoints = Math.max(...playerTwo);
      if (playerOnePoints > playerTwoPoints) {
        this.setState({
          winner: "Player One Won",
        });
      } else if (playerOnePoints === playerTwoPoints) {
        this.setState({ winner: "TIE" });
      } else {
        this.setState({
          winner: "Player Two Won",
        });
      }
    };

    // 6 Flush
    const checkFlush = (suitValue) => {
      const clubsSuit = /[c]/gi;
      const diamondsSuit = /[d]/gi;
      const heartsSuit = /[h]/gi;
      const spadesSuit = /[s]/gi;

      let checkClubsSuits =
        suitValue.match(clubsSuit || []) != null
          ? suitValue.match(clubsSuit || []).length
          : 0;
      let checkDiamondsSuit =
        suitValue.match(diamondsSuit || []) != null
          ? suitValue.match(diamondsSuit || []).length
          : 0;
      let checkHeartsSuit =
        suitValue.match(heartsSuit || []) != null
          ? suitValue.match(heartsSuit || []).length
          : 0;
      let checkSpadesSuit =
        suitValue.match(spadesSuit || []) != null
          ? suitValue.match(spadesSuit || []).length
          : 0;
      if (
        checkClubsSuits > 4 ||
        checkDiamondsSuit > 4 ||
        checkHeartsSuit > 4 ||
        checkSpadesSuit > 4
      ) {
        return 6;
      } else {
        return -1;
      }
    };
    // 8 Four of a kind
    // 7 Full house
    // 4 Three of a kind
    // 3 Two pairs
    // 2 Pair
    const checkForRepeats = (numValue) => {
      const anywordSearch = /(\w).*(\1)/gi;
      let numValueRefined = numValue.replace(/[c]|[d]|[s]|[h]\s/gi, "");
      let checkRepeats = numValueRefined.match(anywordSearch);
      if (checkRepeats) {
        if (checkRepeats.length > 1) {
          if (checkRepeats[0].length === checkRepeats[1].length) {
            return 3;
          } else {
            return 7;
          }
        } else if (checkRepeats.length === 1) {
          if (checkRepeats[0].length < 4) {
            return 2;
          } else if (checkRepeats[0].length > 4) {
            return 8;
          } else {
            return 4;
          }
        }
      } else {
        return -1;
      }
    };
    // 5 Straight
    const checkStraight = (numValue) => {
      const pictureCards = /[j]|[q]|[k]|[a]/gi;
      const jackPicture = /[j]/gi;
      const queenPicture = /[q]/gi;
      const kingPicture = /[k]/gi;
      const acePicture = /[a]/gi;
      let numValueRefined = numValue.replace(/[c]|[d]|[s]|[h]/gi, ",");
      let checkPictureCards = numValueRefined.match(pictureCards)
        ? numValueRefined.match(pictureCards).length
        : 0;
      if (checkPictureCards > 0) {
        numValueRefined = numValueRefined.match(jackPicture)
          ? numValueRefined.replace(jackPicture, "11")
          : numValueRefined.replace(jackPicture, "");
        numValueRefined = numValueRefined.match(queenPicture)
          ? numValueRefined.replace(queenPicture, "12")
          : numValueRefined.replace(queenPicture, "");
        numValueRefined = numValueRefined.match(kingPicture)
          ? numValueRefined.replace(kingPicture, "13")
          : numValueRefined.replace(kingPicture, "");
        numValueRefined = numValueRefined.match(acePicture)
          ? numValueRefined.replace(acePicture, "14")
          : numValueRefined.replace(acePicture, "");
      }
      let res = [];
      res = numValueRefined.split(",");
      res = res.sort(function (a, b) {
        return b - a;
      });
      for (var i = 1; i < res.length; i++) {
        if (res[i] - res[i - 1] !== -1) {
          return -1;
        }
      }
      return 5;
    };
    return (
      <Grid container>
        <Grid item xs={6}>
          <Typography>Player One</Typography>
          <TextField
            id="Player one cards"
            label={this.props.fieldName}
            value={this.props.value}
            placeholder="Enter card details here"
            onChange={setPlayerOneCards}
            variant="outlined"
          />
        </Grid>
        <Grid item xs={6}>
          <Typography>Player Two</Typography>
          <TextField
            id="Player two cards"
            label={this.props.fieldName}
            value={this.props.value}
            placeholder="Enter card details here"
            onChange={setPlayerTwoCards}
            variant="outlined"
          />
        </Grid>
        <Grid>
          <Button onClick={() => compareCards()}>
            <CompareIcon /> Compare
          </Button>
          <Typography>
            {this.state.winner !== null ? this.state.winner : null}
          </Typography>
        </Grid>
      </Grid>
    );
  }
}

export default Homepage;
