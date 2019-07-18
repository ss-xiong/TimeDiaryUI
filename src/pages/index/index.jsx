import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {
  AtFab, AtModal, AtModalHeader,
  AtModalContent, AtModalAction,
  AtForm, AtInput, AtTextarea
} from 'taro-ui'

import './index.scss'


@inject('counterStore')
@observer
class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  state = {
    newDiaryModelShow: false,
    newDiaryTitle: '',
    newDiaryContent: '',
  }

  componentWillMount () {}

  componentWillReact () {}

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  increment = () => {
    const { counterStore } = this.props
    counterStore.increment()
  }

  decrement = () => {
    const { counterStore } = this.props
    counterStore.decrement()
  }

  incrementAsync = () => {
    const { counterStore } = this.props
    counterStore.incrementAsync()
  }

  // 点击添加按钮
  clickAddNewDiary = () => {
    this.setState({
      newDiaryModelShow: true
    })
  }

  // 关闭添加蒙层
  closeAddNewDiaryModel = () => {
    this.setState({
      newDiaryModelShow: false
    })
  }

  // 确定添加
  confirmAddNewDiary = () => {
    console.log('确定添加')
    this.closeAddNewDiaryModel()
  }

  // 输入日志标题信息
  newDiaryTitleInput = (newDiaryTitle) => {
    this.setState({
      newDiaryTitle
    })
  }

  // 输入日志内容提示
  newDiaryContentInput = (newDiaryContent) => {
    this.setState({
      newDiaryContent
    })
  }

  renderAddNewDiaryMode = () => {
    const { newDiaryTitle, newDiaryContent } = this.state
    return (
      <AtModal isOpened>
        <AtModalHeader>新的日志</AtModalHeader>
        <AtModalContent>
          {/* <AtForm> */}
            <AtInput
              type='text'
              placeholder='给个标题吧'
              placeholderStyle="fontSize:14;"
              // error
              border={false}
              value={newDiaryTitle}
              onChange={this.newDiaryTitleInput}
            />
            <AtTextarea
              value={newDiaryContent}
              onChange={this.newDiaryContentInput}
              maxLength={100}
              placeholder='来点简短介绍吗?...'
            />
          {/* </AtForm> */}
        </AtModalContent>
        <AtModalAction>
          <Button onClick={this.closeAddNewDiaryModel}>取消</Button>
          <Button onClick={this.confirmAddNewDiary}>确定</Button>
        </AtModalAction>
      </AtModal>
    )
  }

  render () {
    const { counterStore: { counter } } = this.props
    const { newDiaryModelShow } = this.state
    return (
      <View className='index'>
        <Button onClick={this.increment}>+</Button>
        <Button onClick={this.decrement}>-</Button>
        <Button onClick={this.incrementAsync}>Add Async</Button>
        <Text>{counter}</Text>
        <View className="icon-add-box">
          <AtFab onClick={this.clickAddNewDiary}>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
        </View>
        {newDiaryModelShow ? this.renderAddNewDiaryMode() : null}
      </View>
    )
  }
}

export default Index 
