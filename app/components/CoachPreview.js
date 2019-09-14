import React from 'react'

export default subscription => {
  const swipeBtns = [
    {
      text: 'delete',
      backgroundColor: colors.red,
      onPress: this.props.openModal,
    },
    {
      text: 'view profile',
      backgroundColor: colors.green,
      onPress: () => this.props.navigation.navigate('CoachProfile'),
    },
  ]

  return (
    <Swipeout
      right={swipeBtns}
      backgroundColor="transparent"
      key={`channel-list-item--${subscription.id}`}
    >
      <ChannelPreview {...subscription} navigation={this.props.navigation} />
    </Swipeout>
  )
}
