import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CodeBlockComponent } from '../../components/code-block/code-block';
import { QuickStartExampleComponent } from './example/example';
import { KENDO_TABSTRIP } from '@progress/kendo-angular-layout';
import { CodeFile } from '../../interfaces/code-file';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'docs-quick-start',
  imports: [CodeBlockComponent, QuickStartExampleComponent, KENDO_TABSTRIP, CommonModule],
  templateUrl: './quick-start.html',
  styleUrl: './quick-start.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class QuickStartComponent {
  npm = `
    
        npm i d-grid-angular
    
    `;

  codeFiles: CodeFile[] = [
    {
      fileName: 'example.ts',
      code: `
        import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
        import { D_GRID } from 'd-grid-angular';
        import { Row } from './row';
        import { sampleData } from './data';

        @Component({
          selector: 'docs-quick-start-example',
          imports: [D_GRID],
          templateUrl: './example.html',
          changeDetection: ChangeDetectionStrategy.OnPush,
        })
        export class QuickStartExampleComponent {
          gridData = signal<Row[]>(sampleData);
        }
      `,
      lang: 'typescript',
      showLineNumbers: true,
      selected: true,
    },
    {
      fileName: 'example.html',
      code: `
        <d-grid [style.height.%]="99" [data]="gridData()">
          <d-grid-column field="id" header="id" [width]="50" [sortable]="true"></d-grid-column>
          <d-grid-column field="name" header="name" [width]="100" [sortable]="true"></d-grid-column>
          <d-grid-column field="email" header="email" [width]="150" [sortable]="true"></d-grid-column>
          <d-grid-column field="active" header="active" [width]="100" [sortable]="true"></d-grid-column>
        </d-grid>
      `,
      lang: 'html',
      showLineNumbers: true,
    },
    {
      fileName: 'row.ts',
      code: `
      export interface Row {
        id: number;
        name: string;
        email: string;
        active: boolean;
      }
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
    {
      fileName: 'data.ts',
      code: `
      import { Row } from './row';
      
      export const sampleData: Row[] = [
        { id: 1, name: 'Hinze', email: 'hchamberlaine0@foxnews.com', active: false },
        { id: 2, name: 'Cayla', email: 'csmyley1@people.com.cn', active: true },
        { id: 3, name: 'Haslett', email: 'hbaldery2@myspace.com', active: true },
        { id: 4, name: 'Yvonne', email: 'ypaggitt3@xrea.com', active: true },
        { id: 5, name: 'Diana', email: 'dlusher4@weather.com', active: true },
        { id: 6, name: 'Leesa', email: 'lgilbank5@tinyurl.com', active: true },
        { id: 7, name: 'Pattie', email: 'pwoodhall6@zdnet.com', active: true },
        { id: 8, name: 'Wye', email: 'wkupker7@wisc.edu', active: false },
        { id: 9, name: 'Selia', email: 'sheathcote8@oaic.gov.au', active: false },
        { id: 10, name: 'Lolly', email: 'lpagram9@behance.net', active: true },
        { id: 11, name: 'Elmer', email: 'esudlowa@vk.com', active: false },
        {
          id: 12,
          name: 'Rozalie',
          email: 'rmclarenb@chronoengine.com',
          active: true,
        },
        { id: 13, name: 'Amory', email: 'adurnallc@dion.ne.jp', active: false },
        { id: 14, name: 'Willow', email: 'wbonnickd@yolasite.com', active: false },
        { id: 15, name: 'Jone', email: 'jdurnforde@istockphoto.com', active: true },
        { id: 16, name: 'Ethelyn', email: 'eferrelif@google.es', active: true },
        { id: 17, name: 'Errick', email: 'ebrandsg@statcounter.com', active: true },
        { id: 18, name: 'Diego', email: 'dlotteh@newyorker.com', active: false },
        { id: 19, name: 'Becky', email: 'blisamorei@sbwire.com', active: false },
        { id: 20, name: 'Lind', email: 'lcluelowj@stumbleupon.com', active: true },
        { id: 21, name: 'Mitch', email: 'mwillcockk@prnewswire.com', active: true },
        { id: 22, name: 'Jeffry', email: 'jbasekl@edublogs.org', active: false },
        { id: 23, name: 'Ernesto', email: 'etallantm@patch.com', active: false },
        { id: 24, name: 'Del', email: 'dferrickn@cnn.com', active: false },
        { id: 25, name: 'Sydel', email: 'syouenso@soundcloud.com', active: true },
        { id: 26, name: 'Curran', email: 'cbotemanp@unicef.org', active: true },
        { id: 27, name: 'Zarla', email: 'zgodboltq@amazonaws.com', active: false },
        { id: 28, name: 'Clarinda', email: 'cfernaor@redcross.org', active: true },
        { id: 29, name: 'Babs', email: 'bfeldhammers@hhs.gov', active: false },
        { id: 30, name: 'Idalina', email: 'ibernardonit@cdbaby.com', active: false },
        { id: 31, name: 'Archy', email: 'acorsonu@tamu.edu', active: true },
        { id: 32, name: 'Marianne', email: 'mfriesev@last.fm', active: true },
        { id: 33, name: 'Lindon', email: 'ltrobew@printfriendly.com', active: false },
        { id: 34, name: 'Charleen', email: 'cglanderx@adobe.com', active: false },
        { id: 35, name: 'Oralla', email: 'oferneyhoughy@netvibes.com', active: true },
        { id: 36, name: 'Ewen', email: 'echaslez@zdnet.com', active: true },
        { id: 37, name: 'Anjanette', email: 'agumey10@geocities.jp', active: false },
        { id: 38, name: 'Galvan', email: 'gluca11@mtv.com', active: true },
        { id: 39, name: 'Dewey', email: 'dpenney12@state.tx.us', active: false },
        { id: 40, name: 'Melodie', email: 'mwayon13@nytimes.com', active: true },
        {
          id: 41,
          name: 'Abigael',
          email: 'ahriinchenko14@wordpress.com',
          active: true,
        },
        { id: 42, name: 'Holly', email: 'hphilpin15@va.gov', active: true },
        { id: 43, name: 'Louisette', email: 'ljurczyk16@github.com', active: true },
        { id: 44, name: 'Penelope', email: 'pbacher17@sina.com.cn', active: false },
        { id: 45, name: 'Baxter', email: 'bicke18@bravesites.com', active: true },
        { id: 46, name: 'Lilla', email: 'lkinker19@nature.com', active: true },
        { id: 47, name: 'Dicky', email: 'dmaciver1a@mashable.com', active: false },
        { id: 48, name: 'Erinn', email: 'eburgoin1b@chron.com', active: true },
        {
          id: 49,
          name: 'Bessie',
          email: 'bmochar1c@blogtalkradio.com',
          active: false,
        },
        { id: 50, name: 'Onida', email: 'ocuthill1d@mit.edu', active: false },
        { id: 51, name: 'Giselbert', email: 'gmonckton1e@360.cn', active: false },
        {
          id: 52,
          name: 'Shaylynn',
          email: 'sharnwell1f@instagram.com',
          active: false,
        },
        { id: 53, name: 'Johannah', email: 'jbricksey1g@apple.com', active: true },
        { id: 54, name: 'Delbert', email: 'dtroy1h@cocolog-nifty.com', active: true },
        { id: 55, name: 'Bernard', email: 'bmingey1i@pbs.org', active: true },
        { id: 56, name: 'Emery', email: 'ejuggins1j@google.cn', active: false },
        { id: 57, name: 'Shaylah', email: 'shutt1k@go.com', active: true },
        { id: 58, name: 'Leanora', email: 'lchettoe1l@walmart.com', active: true },
        {
          id: 59,
          name: 'Mollie',
          email: 'mkester1m@barnesandnoble.com',
          active: true,
        },
        { id: 60, name: 'Ingar', email: 'ioulet1n@weebly.com', active: false },
        { id: 61, name: 'Jayme', email: 'jbursnoll1o@technorati.com', active: false },
        { id: 62, name: 'Tess', email: 'tcrombie1p@youtu.be', active: false },
        {
          id: 63,
          name: 'Alex',
          email: 'aissatt1q@merriam-webster.com',
          active: true,
        },
        {
          id: 64,
          name: 'Gerhardt',
          email: 'gmcgrey1r@eventbrite.com',
          active: false,
        },
        { id: 65, name: 'Tomi', email: 'tarndtsen1s@google.ru', active: true },
        { id: 66, name: 'Rufe', email: 'rcrosio1t@jimdo.com', active: false },
        { id: 67, name: 'Tasha', email: 'trowthorn1u@opensource.org', active: true },
        {
          id: 68,
          name: 'Brandea',
          email: 'bfoort1v@acquirethisname.com',
          active: true,
        },
        { id: 69, name: 'Gardener', email: 'gparsell1w@ask.com', active: true },
        { id: 70, name: 'Dani', email: 'dmchardy1x@theguardian.com', active: true },
        { id: 71, name: 'Elton', email: 'enaul1y@illinois.edu', active: false },
        { id: 72, name: 'Genia', email: 'gtolfrey1z@over-blog.com', active: true },
        { id: 73, name: 'Gaye', email: 'gshavel20@goodreads.com', active: false },
        {
          id: 74,
          name: 'Maitilde',
          email: 'mkenton21@huffingtonpost.com',
          active: false,
        },
        { id: 75, name: 'Theo', email: 'tisherwood22@mlb.com', active: true },
        { id: 76, name: 'Kimberly', email: 'kputland23@salon.com', active: false },
        {
          id: 77,
          name: 'Diarmid',
          email: 'dchatburn24@sciencedaily.com',
          active: true,
        },
        { id: 78, name: 'Jordanna', email: 'jculkin25@topsy.com', active: true },
        { id: 79, name: 'Pooh', email: 'ptabart26@issuu.com', active: false },
        { id: 80, name: 'Louie', email: 'lmont27@foxnews.com', active: false },
        { id: 81, name: 'Isiahi', email: 'istreetfield28@reddit.com', active: true },
        { id: 82, name: 'Anny', email: 'aendley29@japanpost.jp', active: true },
        { id: 83, name: 'Terrance', email: 'tsokell2a@lycos.com', active: false },
        { id: 84, name: 'Mahmud', email: 'mkeynes2b@alexa.com', active: true },
        { id: 85, name: 'Stanton', email: 'spenketh2c@drupal.org', active: true },
        { id: 86, name: 'Zarla', email: 'zrycraft2d@dagondesign.com', active: false },
        { id: 87, name: 'Virgie', email: 'vgilmore2e@free.fr', active: true },
        { id: 88, name: 'Ceciley', email: 'cfabri2f@eepurl.com', active: false },
        { id: 89, name: 'Juliette', email: 'jwillmont2g@europa.eu', active: false },
        {
          id: 90,
          name: 'Jessalin',
          email: 'jruppert2h@ezinearticles.com',
          active: true,
        },
        { id: 91, name: 'Peggie', email: 'ppickles2i@yelp.com', active: true },
        { id: 92, name: 'Clarita', email: 'cneissen2j@icq.com', active: false },
        { id: 93, name: 'Arlinda', email: 'avaney2k@dailymotion.com', active: false },
        { id: 94, name: 'Rebecca', email: 'rshawell2l@netvibes.com', active: true },
        {
          id: 95,
          name: 'Alasdair',
          email: 'acroall2m@yellowbook.com',
          active: false,
        },
        { id: 96, name: 'Bearnard', email: 'bmulheron2n@arizona.edu', active: false },
        {
          id: 97,
          name: 'Garrard',
          email: 'gshoosmith2o@sciencedaily.com',
          active: true,
        },
        { id: 98, name: 'Nealy', email: 'nbuffham2p@scribd.com', active: true },
        { id: 99, name: 'Ashbey', email: 'aleek2q@statcounter.com', active: true },
        { id: 100, name: 'Caron', email: 'cyelyashev2r@nymag.com', active: true },
      ];
      `,
      lang: 'typescript',
      showLineNumbers: true,
    },
  ];
}
