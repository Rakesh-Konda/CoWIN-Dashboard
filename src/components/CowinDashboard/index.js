// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'
import VaccinationCoverage from '../VaccinationCoverage'
import VaccinationByGender from '../VaccinationByGender'
import VaccinationByAge from '../VaccinationByAge'

import './index.css'

const apiStatusConstants = {
  initial: 'INITIAL',
  success: 'SUCCESS',
  failure: 'FAILURE',
  inProgress: 'INPROGRESS',
}

class CowinDashboard extends Component {
  state = {
    lastSevenDays: [],
    byAge: [],
    byGender: [],
    apiStatus: apiStatusConstants.initial,
    go: true,
  }

  componentDidMount() {
    this.getDetails()
  }

  getSuccess = data => {
    this.setState({
      lastSevenDays: data.last_7_days_vaccination,
      byAge: data.vaccination_by_age,
      byGender: data.vaccination_by_gender,
      apiStatus: apiStatusConstants.success,
    })
  }

  getFailure = () => {
    this.setState({apiStatus: apiStatusConstants.failure})
  }

  getDetails = async () => {
    this.setState({apiStatus: apiStatusConstants.inProgress})
    const url = 'https://apis.ccbp.in/covid-vaccination-data'
    const response = await fetch(url)
    const data = await response.json()
    console.log(response)
    if (response.ok) {
      this.getSuccess(data)
    } else {
      this.getFailure()
    }
  }

  progress = () => (
    <div data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
    </div>
  )

  compo = () => {
    const {lastSevenDays, byAge, byGender} = this.state
    return (
      <div>
        <VaccinationCoverage lastSevenDays={lastSevenDays} />
        <VaccinationByGender byGender={byGender} />
        <VaccinationByAge byAge={byAge} />
      </div>
    )
  }

  FailureView = () => (
    <div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
      />
      <h1 className="h1">Something went wrong</h1>
    </div>
  )

  hlo = () => {
    const {apiStatus} = this.state
    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.compo()
      case apiStatusConstants.failure:
        return this.FailureView()
      case apiStatusConstants.inProgress:
        return this.progress()
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <div className="bg">
          <div className="cen">
            <img
              src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png"
              alt="website logo"
              className="logo"
            />
            <h1 className="h1">Co-Win</h1>
          </div>
          <h1 className="h12">CoWin Vaccination in India</h1>
          <div>{this.hlo()}</div>
        </div>
      </div>
    )
  }
}
export default CowinDashboard
