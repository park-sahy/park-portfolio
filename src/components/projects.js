import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardActions, CardMenu, IconButton, Button, CardText } from 'react-mdl';
import Port from './Portfolio.png';
import Todo from './todo.png';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    state = {
        isOpen: false
    };

    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div>
                    <div className="projects-grid">
                        {/*Project1*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://miro.medium.com/max/8642/1*iIXOmGDzrtTJmdwbn7cGMw.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                중앙HTA
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                종로 중앙HTA<br />
                               프로젝트기간 : 2016.6~2016.7<br />
                               프로젝트내용 : 도서관리시스템개발<br />
                               사용언어 : JAVA,JSP,ORCAL,HTML/CSS<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Project2*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://spring.io/images/OG-Spring.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                종로 중앙HTA 프로젝트
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                종로 중앙HTA<br />
                               프로젝트기간 : 2016.9~2016.10<br />
                               프로젝트내용 : 도서관리시스템개발<br />
                               사용언어 : JAVA,MYSQL,HTML/CSS,SPRING<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div>
            )
        } else if (this.state.activeTab === 1) {
            return (
                <div>
                    <div className="projects-grid">
                        {/*docomo*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.unlockjp.com/en/wp-content/uploads/2020/01/d.jpg) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                도코모
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 도쿄 [도코모]<br />
                               근무기간 : 2017.11~2018.4<br />
                               프로젝트업무 : 컨텐츠관리시스템(CMS)<br />
                               유지보수 테스트 업무 담당<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*denso*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://www.eetasia.com/wp-content/uploads/sites/2/images/c62d7015-fde1-4934-9993-0ccf6e27e14b.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                덴소
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [덴소]<br />
                               근무기간 : 2018.5~2019.5<br />
                               프로젝트업무 : 덴소 차량통신모튤(DCM)<br />유지보수
                               테스트 업무 담당<br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*toyota*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://logos-world.net/wp-content/uploads/2020/04/Toyota-Logo.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                토요타
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [토요타]<br />
                               프로젝트기간 : 2019.6~2019.11<br />
                               담담업무 : 토요타연계시스템 유지보수 <br />
                                <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Toyata systems*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d3lckkmmuve1sw.cloudfront.net/attachments/0dfea67a48e300a717950687abd40afaa0b15517/store/c91aef7a3041e862f6beb3c2d6a743287364638ce00bfc8937c83c912db2/80208231.png) center / cover'
                            }}>

                            </CardTitle>
                            <CardText>
                                토요타시스템
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처 : 일본 나고야 [토요타시스템]<br />
                               프로젝트기간 : 2019.12~2020.4<br />
                               담담업무 : 토요타 KITORA 프레임워크<br /> 유지보수 담당
                               <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*React*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://d585tldpucybw.cloudfront.net/sfimages/default-source/blogs/templates/social/reactt-dark_1200x628.png?sfvrsn=19de8226_2) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                오픈세사미 테그노롤지
                            </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                근무처:일본 나고야 [오픈세사미테크노롤지]<br />
                               프로젝트기간 : 2019.5~2020.10<br />
                               프로젝트내용 : 자동차 운행관리시스템 개발<br />
                               담담업무 : 리액트 프론트엔트 담당 <br />
                                <br />
                            </CardActions>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div >
            )
        } else if (this.state.activeTab === 2) {
            return (
                <div>
                    <div className="projects-grid">

                        {/*Project1*/}

                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <img src={Port} alt="kojinProject" style={{ height: '178px' }} />
                            <CardText>
                                개인프로젝트
                        </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                                리엑트 포트폴리오
                        </CardActions>
                            <Button onClick={(e) => this.setState({ isOpen: true })}>⚙️GIT HUB</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                      {/*Project1*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                        <img src={Todo} alt="kannrisystem" style={{ height: '178px' }} />
                            <CardText>
                                개인프로젝트
                        </CardText>
                     
                            <CardActions border style={{ textAlign: "left" }}>
                                리엑트 스케줄관리시스템
                        </CardActions>
                            <Button onClick={(e) => this.setState({ isOpen: true })}>⚙️GIT HUB</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>

                        {/*Project2*/}
                        <Card className="box" shadow={5} style={{ minWidh: '450', margin: 'auto' }}>
                            <CardTitle style={{
                                color: 'black', height: '176px',
                                background: 'url(https://zikto.github.io/img/react-native.png) center / cover'
                            }}>
                            </CardTitle>
                            <CardText>
                                개인프로젝트
                        </CardText>
                            <CardActions border style={{ textAlign: "left" }}>
                            리엑트 네이티브 날씨어플
                        </CardActions>
                            <Button disabled="disabled" onClick={(e) => this.setState({ isOpen: true })}>⚙️is Coming soon</Button>
                            <CardMenu style={{ color: '#fff' }}>
                                <IconButton name="share" />
                            </CardMenu>
                        </Card>
                    </div></div>
            )
        }
    }

    render() {
        return (
            <div>
                <Tabs activeTab={this.state.activeTab}
                    onChange={(tabId => this.setState({ activeTab: tabId }))} ripple>
                    <Tab><strong>↳기관프로젝트</strong></Tab>
                    <Tab><strong>↳실무프로젝트</strong></Tab>
                    <Tab><strong>↳개인프로젝트</strong></Tab>
                </Tabs>
                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        )
    }
}
export default Projects;