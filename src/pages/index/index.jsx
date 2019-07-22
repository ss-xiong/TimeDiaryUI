import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text } from '@tarojs/components'
import { observer, inject } from '@tarojs/mobx'
import {
  AtFab, AtModal, AtModalHeader,
  AtModalContent, AtModalAction,
  AtForm, AtInput, AtTextarea,
  AtNavBar, AtTabBar,
  AtList, AtListItem, AtSwipeAction
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
      <View className="page-wrap">
        <AtNavBar border title='时间日志' className="navibar-top" />
        <View>
          <AtList>
          <AtSwipeAction　onClick={(e)=>{console.log(e, 'CCCClik')}} options={[
            {
              text: '暂停',
              style: {
                backgroundColor: '#6190E8'
              }
            },
            {
              text: '结束',
              style: {
                backgroundColor: '#FF4949'
              }
            }
          ]}>
            <AtListItem
              title='标题文字'
              extraText='详细信息'
              thumb='http://img10.360buyimg.com/jdphoto/s72x72_jfs/t5872/209/5240187906/2872/8fa98cd/595c3b2aN4155b931.png'
              onClick={() => {console.log('Item click')}}
            />
          </AtSwipeAction>
          </AtList>
        </View>

        <View className="icon-add-box">
          <AtFab onClick={this.clickAddNewDiary}>
            <Text className='at-fab__icon at-icon at-icon-add'></Text>
          </AtFab>
        </View>
        <AtTabBar
          fixed
          color="#A5A5A5"
          selectedColor="#6190E8"
          tabList={[
            { title: '时间', iconType: 'list' },
            // { title: '统计', iconType: 'analytics' },
            { title: '设置', iconType: 'settings' }
          ]}
          onClick={()=>{}}
          current={0}
        />
        {newDiaryModelShow ? this.renderAddNewDiaryMode() : null}
      </View>
    )
  }
}

export default Index 
