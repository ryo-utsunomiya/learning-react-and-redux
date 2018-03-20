import React from 'react';
import PropTypes from 'prop-types';
import Card, { CardMedia, CardContent, CardActions } from 'material-ui/Card';
import { Typography, Button } from 'material-ui';

export default class Ranking extends React.Component {
  componentWillMount() {
    this.props.onMount(this.props.categoryId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.categoryId !== nextProps.categoryId) {
      this.props.onUpdate(nextProps.categoryId);
    }
  }

  render() {
    const { category, ranking, error } = this.props;

    return (
      <div>
        <h2>{category ? `${category.name} Ranking` : ''}</h2>

        {(() => {
          if (error) {
            return <p>Something is wrong. Please reload.</p>;
          } else if (ranking === undefined) {
            return <p>Loading...</p>;
          }
          return ranking.map((item, i) => (
            <Card
              key={`ranking-item-${item.code}`}
              styl={{ maxWidth: '500px', margin: '32px auto' }}
            >
              <CardMedia
                image={item.imageUrl}
                title={`${i + 1}. ${item.name}`}
                style={{ width: '500px', height: '200px', margin: '0 auto' }}
              />
              <CardContent>
                <Typography type="title">{`${i + 1}. ${item.name}`}</Typography>
              </CardContent>
              <CardActions>
                <Button variant="raised" color="secondary" fullWidth href={item.url}>
                  See Detail
                </Button>
              </CardActions>
            </Card>
          ));
        })()}
      </div>
    );
  }
}
Ranking.propTypes = {
  categoryId: PropTypes.string,
  onMount: PropTypes.func.isRequired,
  onUpdate: PropTypes.func.isRequired,

  category: PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }),
  ranking: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  })),
  error: PropTypes.bool.isRequired,
};
Ranking.defaultProps = {
  categoryId: '1',
};
