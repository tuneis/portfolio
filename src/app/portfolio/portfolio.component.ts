import { Project } from './../view-models/project';
import { ChartPieMulti } from './../skills/skills-chart/chart-pie-multi';
import { Component, OnInit } from '@angular/core';
import { ChartPieSingle } from '../skills/skills-chart/chart-pie-single';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  // status variables
  status = {
    production: 'Production',
    beta: 'Beta',
    alpha: 'Alpha'
  };

  // labels for platform
  platform = {
    aspnetcore: 'ASP.NET Core',
    aspnet: 'ASP.NET',
    angular: 'Angular',
    android: 'Android'
  };

  // colors for platform and status
  colors = {
    alpha: '#dc3545',
    beta: '#007bff',
    production: '#28a745',
    android: 'rgb(133, 200, 8)',
    angular: 'rgb(221, 0, 49)',
    aspnet: 'rgb(0, 128, 255)',
    aspnetcore: 'rgb(104, 33, 122)'
  };

  // count variables
  counts = {
    productionCount: 0,
    betaCount: 0,
    alphaCount: 0,
    androidCount: 0,
    aspnetCount: 0,
    aspnetcoreCount: 0,
    angularCount: 0,
  };

  // icons
  androidIcon = 'fab fa-android fa-2x android-color';
  aspnetIcon = 'fab fa-windows fa-2x aspnet-color';
  aspnetcoreIcon = 'fab fa-windows fa-2x aspnetcore-color';
  angularIcon = 'fab fa-angular fa-2x angular-color';

  // buttons
  productionBtn = 'btn btn-success border-dark';
  betaBtn = 'btn btn-primary border-dark disabled';
  alphaBtn = 'btn btn-danger border-dark disabled';

  // projects
  projects: Project[];
  projectsStatusData: ChartPieSingle[];
  projectsPlatformData: ChartPieSingle[];

  // multi = [
  //   new ChartPieMulti('multi', this.single)
  // ];

  // chart width and height
  view: any[] = [undefined, 200];

  // chart color schemes
  statusScheme = {
    domain: [this.colors.alpha, this.colors.beta, this.colors.production]
  };
  platformScheme = {
    domain: [this.colors.android, this.colors.angular, this.colors.aspnet, this.colors.aspnetcore]
  };

  /**
   * Almighty constructor.
   */
  constructor() {
    // set projects
    this.setProjects();

    // set the chart data
    this.setChartData();
  }

  /**
   * Sets the projects to be displayed.
   */
  setProjects() {
    this.projects = [
      new Project('AgroTelligent',
        'As a predecessor of RTAG, this project was the beginning stages of real time weather data analysis.',
        'http://www.agrotelligent.net',
        '/assets/img/agrotelligent.png',
        this.platform.aspnet,
        this.status.production,
        this.aspnetIcon,
        this.productionBtn
      ),
      new Project('RTAG',
        'Real Time Agriculture is a system developed to record and analyze real time weather data across the province of Ontario.',
        'http://rtag.niagararesearch.ca',
        '/assets/img/rtag.png',
        this.platform.angular,
        this.status.production,
        this.angularIcon,
        this.productionBtn
      ),
      new Project('RCP',
        'The Research Crop Portal is a crop management portal used to help the Grain Farmers of Ontario analyze and process their yield data.',
        'http://cropportal.niagararesearch.ca',
        '/assets/img/cp.png',
        this.platform.aspnet,
        this.status.production,
        this.aspnetIcon,
        this.productionBtn
      ),
      new Project('MPT',
        'Musician\'s Practice Tracker is a mobile application developed in Xamarin Forms for musicians to organize their practice schedule, set goals, and see statistics about the progress they are making for all of their exercises.',
        'https://play.google.com/store/apps/details?id=com.tuneis.musicianspracticetracker&hl=en',
        '/assets/img/mpt.png',
        this.platform.android,
        this.status.production,
        this.androidIcon,
        this.productionBtn
      ),
      new Project('FN Dictionary',
        'The FN dictionary is a joke application that querys the words from the dictionary and inserts vulgarity throughout the definitions in clever spots.',
        'https://play.google.com/store/apps/details?id=com.tuneis.fnd&hl=en',
        '/assets/img/fn.png',
        this.platform.android,
        this.status.production,
        this.androidIcon,
        this.productionBtn
      ),
      new Project('M2W',
        'A band website for the heavy metal band from Hamilton, ON called Men To Wolves.',
        'http//www.mentowolves.com',
        '/assets/img/m2w.jpg',
        this.platform.angular,
        this.status.beta,
        this.angularIcon,
        this.betaBtn
      ),
      new Project('OTSI-Project',
        'Under NDA, cannot disclose until release.',
        '',
        '/assets/img/otsi_project.png',
        this.platform.android,
        this.status.beta,
        this.androidIcon,
        this.betaBtn
      ),
      new Project('SoilOptix',
        'SoilOptix uses propietary algorithms to generate High-Definition Top Soil Maps to help farmers improve their soil health and grow better crops.',
        '',
        '/assets/img/soiloptix.png',
        this.platform.aspnetcore,
        this.status.alpha,
        this.aspnetcoreIcon,
        this.alphaBtn
      ),
      new Project('ATP',
        'Art Theray Directives is an app to manage and log practicums for psychotherapists.',
        '',
        'http://www.wheatland.com/components/com_easyblog/themes/wireframe/images/placeholder-image.png',
        this.platform.android,
        this.status.alpha,
        this.androidIcon,
        this.alphaBtn
      ),
    ];
  }

  /**
   * Get's the counts for each product by release status.
   */
  setChartData() {
    // loop through the projects to get their counts for the chart
    for (let i = 0; i < this.projects.length; i++) {
      switch (this.projects[i].status) {
        case this.status.production:
          this.counts.productionCount++;
          break;
        case this.status.beta:
          this.counts.betaCount++;
          break;
        case this.status.alpha:
          this.counts.alphaCount++;
          break;
      }
      switch (this.projects[i].platform) {
        case this.platform.android:
          this.counts.androidCount++;
          break;
        case this.platform.aspnet:
          this.counts.aspnetCount++;
          break;
        case this.platform.aspnetcore:
          this.counts.aspnetcoreCount++;
          break;
        case this.platform.angular:
          this.counts.angularCount++;
          break;
      }
    }

    // add data to chart
    this.projectsStatusData = [
      new ChartPieSingle(this.status.alpha, this.counts.alphaCount),
      new ChartPieSingle(this.status.beta, this.counts.betaCount),
      new ChartPieSingle(this.status.production, this.counts.productionCount),
    ];

    // add data to chart
    this.projectsPlatformData = [
      new ChartPieSingle(this.platform.android, this.counts.androidCount),
      new ChartPieSingle(this.platform.angular, this.counts.angularCount),
      new ChartPieSingle(this.platform.aspnet, this.counts.aspnetCount),
      new ChartPieSingle(this.platform.aspnetcore, this.counts.aspnetcoreCount)
    ];
  }

  ngOnInit() {
  }

  onSelect(event) {
    console.log(event);
  }
}
