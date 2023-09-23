import './App.css';
import Navbar from './Components/Nav/Nav';
import Earnings from './Components/Earnings/Earnings';
import TopNav from './Components/TopNav/TopNav';
import Division from './Components/Division/Division';
import LineChart from './Components/Charts/LineChart';
import PieChart from './Components/Charts/PieChart';
import Colors from './Components/Colors/Colors';
import Footer from './Components/Footer/Footer';
import Progress from './Components/Progress/Progress';
import { useState } from 'react';
function App() {
  const [navBar, setNavBar] = useState('nav');
  const resNavBar = () => {
    setNavBar('nav-open')
  }
  const NorNavBar = () => {
    setNavBar('nav')
  }
  const rowStyle = {
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%'
  }
  return (
    <div style={{
      display: 'flex'
    }}>
      <Navbar
        navBar={navBar}
      />
      <div className='main'>
        <TopNav
          resNavBar={resNavBar}
          NorNavBar={NorNavBar}
        />
        <div style={{
          padding: '20px',
          marginTop: '70px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%'
          }}>
            <h4>Dashboard</h4>
            <button className='btn btn-primary' style={{
              border: 'none',
              back: 'transparent'
            }}>
              <i class="fas fa-download" style={{
                paddingRight: '10px'
              }}></i>
              Generate Report
            </button>
          </div>

          <div style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-evenly',
            alignItems: 'center',
            marginTop: '20px',
            flexWrap: 'wrap'
          }}>
            <Earnings
              title={'Earnings(Monthly)'}
              content={'$40,000'}
              color={'#577ae1'}
              symbol={<i class="fa-solid fa-calendar"></i>}
            />
            
            <Earnings
              title={'Earnings(Annual)'}
              content={'$215,000'}
              color={'#28ca90'}
              symbol={<i class="fa-solid fa-dollar-sign"></i>}
            />
     
            <Earnings
              title={'Tasks'}
              content={'50%'}
              color={'#36b9cc'}
              symbol={<i class="fa-solid fa-clipboard"></i>}
            >
              <div className="progress" style={{
                width : '100px',
                height : '10px',
                marginTop : '20px'
              }}>
                <div className="progress-bar" role="progressbar" aria-valuenow='50' aria-valuemin='0' aria-valuemax='100' style={{
                    width: '50%',
                    backgroundColor : '#36b9cc'
                }}>
                  <span class="sr-only">70% Complete</span>
                </div>
            </div>
            </Earnings>
            <Earnings
              title={'Pending Requests'}
              content={'18'}
              color={'#fac23e'}
              symbol={<i class="fa-solid fa-comments"></i>}
            />
   
          </div>



          <div>
            <div className='row charts-pie' style={{
              padding: '',
              display: 'flex',
              justifyContent: 'space-between'
            }}>
              <Division width={'col-lg-7 col-md-12 col-sm-11'} title={'Earnings Overview'}>
                <LineChart />
              </ Division>
              <Division width={'col-lg-4 col-md-12 col-sm-11'} title={'Revenue Sources'}>
                <PieChart />
              </Division>
            </div>
            <div className='row' style={rowStyle}>
              <Division width={'col-lg-6 col-md-12 col-sm-11'} title={'Projects'}>
                <div>
                  <Progress title={'Server Migration'} value={'20'} titleVal={'20%'} color={'#e74a3b'} />
                  <Progress title={'Sales Tracking'} value={'40'} titleVal={'40%'} color={'#f6c23e'} />
                  <Progress title={'Customer Database'} value={'60'} titleVal={'60%'} color={'#4e73df'} />
                  <Progress title={'Payout Details'} value={'80'} titleVal={'80%'} color={'#36b9cc'} />
                  <Progress title={'Account Setup'} value={'100'} titleVal={'Complete'} color={'#1cc88a'} />
                </div>
              </Division>
              <Division width={'col-lg-5 col-md-12 col-sm-11'} title={'Illustrations'}>
                <div style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  marginBottom: '10px'
                }}>
                  <img src='https://startbootstrap.github.io/startbootstrap-sb-admin-2/img/undraw_posting_photo.svg'
                    style={{
                      width: '250px',
                      height: '150px',
                    }}
                    alt=''></img>
                </div>
                <p>Add some quality, svg illustrations to your project courtesy of unDraw, a constantly updated collection of beautiful svg images that you can use completely free and without attribution!</p>
                <a href='https://undraw.co/'>Browse Illustrations on unDraw </a>
              </Division>
            </div>
            <div className='row' style={{
              padding: '20px 30px',
              display: 'flex',
              justifyContent: 'space-between'
            }}>

              <div className='col-lg-6 col-md-12 col-sm-11 colors' style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center'
              }}>
                <Colors colorCode={'#4e73df'} colorName={'Primary'} backColor={'#4e73df'} textColor={'white'} />
                <Colors colorCode={'#1cc88a'} colorName={'Success'} backColor={'#1cc88a'} textColor={'white'} />
                <Colors colorCode={'#36b9cc'} colorName={'Info'} backColor={'#36b9cc'} textColor={'white'} />
                <Colors colorCode={'#f6c23e'} colorName={'Warning'} backColor={'#f6c23e'} textColor={'white'} />
                <Colors colorCode={'#e74a3b'} colorName={'Danger'} backColor={'#e74a3b'} textColor={'white'} />
                <Colors colorCode={'#858796'} colorName={'Secondary'} backColor={'#858796'} textColor={'white'} />
                <Colors colorCode={'#f8f9fc'} colorName={'Light'} backColor={'white'} textColor={'#1C2833'} />
                <Colors colorCode={'#5a5c69'} colorName={'Dark'} backColor={'#5a5c69'} textColor={'white'} />
              </div>


              <Division width={'col-lg-5 col-md-12 col-sm-11'} title={'Development Approach'}>
                <p>SB Admin 2 makes extensive use of Bootstrap 4 utility classes in order to reduce CSS bloat and poor page performance. Custom CSS classes are used to create custom components and custom utility classes.</p>
                <br></br>
                <p>Before working with this theme, you should become familiar with the Bootstrap framework, especially the utility classes.</p>
              </Division>
            </div>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
