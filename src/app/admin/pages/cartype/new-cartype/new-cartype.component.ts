import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { IcartypeForm } from 'src/app/admin/util/interfaces/cartype-form.interface';
import { ArticleForm } from 'src/app/admin/util/models/ArticleForm';
import { CartypeForm } from 'src/app/admin/util/models/CartypeForm';
import { ModelForm } from 'src/app/admin/util/models/ModelForm';
import { SmartcardForm } from 'src/app/admin/util/models/SmartcardForm';
import { SmartpointForm } from 'src/app/admin/util/models/SmartpointForm';
import { Imodeldto } from 'src/app/interfaces/dto/imodeldto';
import { Iarticle } from 'src/app/interfaces/iarticle';
import { Iimage } from 'src/app/interfaces/iimage';
import { Ismartcard } from 'src/app/interfaces/ismartcard';
import { Ismartpoint } from 'src/app/interfaces/ismartpoint';
import { CartypeService } from 'src/app/services/cartype.service';

@Component({
  selector: 'app-new-cartype',
  templateUrl: './new-cartype.component.html',
  styleUrls: ['./new-cartype.component.scss'],
})
export class NewCartypeComponent implements OnInit {
  cartypeForm: FormGroup<IcartypeForm>;
  constructor(private cartypeService: CartypeService, private router: Router) {
    this.cartypeForm = new CartypeForm();
  }
  get images(): FormArray {
    return this.cartypeForm.get('images') as FormArray;
  }
  get articles(): FormArray {
    return this.cartypeForm.get('articles') as FormArray;
  }
  get smartcards(): FormArray {
    return this.cartypeForm.get('smartcards') as FormArray;
  }
  get titleImage(): FormControl {
    return this.cartypeForm.get('titleImage') as FormControl;
  }
  get design(): FormControl {
    return this.cartypeForm.get('design') as FormControl;
  }
  get title(): FormControl {
    return this.cartypeForm.get('title') as FormControl;
  }
  get seats(): FormControl {
    return this.cartypeForm.get('seats') as FormControl;
  }
  get model(): ModelForm {
    return this.cartypeForm.get('model') as ModelForm;
  }
  ngOnInit(): void {}
  populateForm() {
    //this.articles.push(new ArticleForm());
    let dummy = {
      model: {
        name: 'Class-A',
        maker: 1,
      },
      seats: 5,
      design: 1,
      title: 'A-oszt??ly limuzin.',
      titleImage:
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/simple_stage.component.damq4.3305804656391.jpg/A-Class-Saloon_V177_Stage_Overview_2730x1213.jpg',
      articles: [
        {
          title: 'Az A-oszt??ly limuzin bels?? megjelen??se.',
          description:
            'Tudjon meg t??bbet a Mercedes-Benz A-oszt??ly limuzin bels?? ter??nek kiemelked?? elemeir??l. Az MBUX sz??les sz??riafelszerelts??ge mellett h??rom kivitelv??ltozat k??z??l v??laszthat az ??l??sek, a korm??nyker??k, a k??rpitoz??s ??s m??g sok m??s opci?? szem??lyre szab??s??hoz: Style, Progressive ??s AMG Line.',
          image:
            'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1344672560/tabitem/hotspot_module/hotspot_simple_image.component.damq4.3304703354193.jpg/mercedes-benz-a-class-v177-highlights-02-2730x1536-01-2021.jpg',
        },
        {
          title: 'Az A-oszt??ly limuzin m??szaki adatai.',
          description:
            'Tudjon meg mindent a fogyaszt??sr??l, a motorr??l, a teljes??tm??nyr??l, a csomagt??r t??rfogat??r??l ??s a t??bbi m??szaki adatr??l.',
          image: '',
        },
        {
          title: 'A 250 e Plug-in Hybrid',
          description:
            'A Plug-in Hybrid technol??gi??val felszerelt A-oszt??ly limuzin egyes??ti a villanymotor dinamik??j??t ??s hat??konys??g??t a bels?? ??g??s?? motorok hat??t??vols??g??val ak??r 160 kW (218 LE) rendszerteljes??tm??nyig,[1] ??s 450 Nm maxim??lis forgat??nyomat??kig.[1]. Az elektromotor tov??bbi teljes??tm??nyt bocs??t rendelkez??sre a gyors??t??sn??l, vagy v??rosban k??zlekedve egyed??l ak??r 60-71 kilom??tert[2], b??r, ??gy ??n napi ??tjai nagyobb r??sz??t a k??rnyezetet k??m??lve, helyi k??rosanyag-kibocs??t??s n??lk??l teheti meg.',
          image:
            'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/simple_teaser/simple_teaser_item_c.component.damq6.3306885772390.jpg/mercedes-benz-a-class-v177-highlights-plug-in-hybrid-2730x1536-11-2021.jpg',
        },
      ],
      images: [
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1681858178/tabitem/hotspot_module/hotspot_simple_image.component.damq4.3304557582392.jpg/mercedes-amg-a-class-v177-design-exterior-2730x1536-05-2019_cropped.jpg',
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1681858178/tabitem/hotspot_module/hotspot_simple_image/hotspot_item_33963964.component.damq5.3304557957416.jpg/mercedes-amg-a-class-v177-design-exterior-wheels-2048x1536-02-2020_cropped-B.jpg',
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1681858178/tabitem/hotspot_module/hotspot_simple_image/hotspot_item_230857221.component.damq5.3304445720455.jpg/mercedes-amg-a-class-v177-design-exterior-rear-2730x1536-02-2020.jpg',
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1681858178/tabitem_465459545/hotspot_module/hotspot_simple_image.component.damq4.3304445972582.jpg/mercedes-amg-a-class-v177-design-interior-2730x1536-03-2021.jpg',
        'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs_1681858178/tabitem_1135868572/hotspot_module_1714055044/hotspot_simple_image.component.damq4.3304447275086.jpg/mercedes-amg-a-class-v177-performance-2730x1536-05-2019.jpg',
      ],
      smartcards: [
        {
          image:
            'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image.component.damq4.3303754963959.jpg/mercedes-benz-a-class-v177-design-contentgallery-front-01-2730x1536-07-2018.jpg',
          smartpoints: [
            {
              description:
                'Aut??p??ly??n, orsz??g??ton vagy v??rosi forgalomban: Az intelligens vil??g??t??si funkci??knak k??sz??nhet??en az adapt??v MULTIBEAM LED f??nysz??r??k a k??r??lm??nyekhez igazodva vil??g??tj??k meg az ??ttestet, a f??nysz??r??k pedig egyedileg szab??lyozhat?? LED-ek seg??ts??g??vel reag??lnak az aktu??lis forgalmi helyzetre.',
              image:
                'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image/hotspot_item_841962961.component.damq5.3203698447570.jpg/mercedes-benz-a-class-v177-assistancesystems-contentgallery-multibeamled-02-2730x1536-02-2019.jpg',
              title: 'MULTIBEAM LED',
              x: 33,
              y: 64,
            },
            {
              description:
                'asddddddddddddddddas asfas fs     qwewqewqe sadasnbg dsadqweqw',
              image: '',
              title: 'MULTIBEAM LED',
              x: 44,
              y: 57,
            },
            {
              description:
                'A HANDS-FREE ACCESS seg??ts??g??vel k??nnyen berakodhatja a csomagjait: A csomagt??rfed??l ??rint??s n??lk??l ny??lik ki. A rendszernek a h??ts?? l??kh??r??t?? al?? be??p??tett szenzorai felismerik az ??n l??blend??t?? mozdulat??t. Ez k??l??n??sen akkor hasznos seg??ts??g, amikor a bev??s??rl??sb??l j??vet egyik keze sem szabad a sok csomag miatt.',
              image:
                'https://www.mercedes-benz.hu/content/hungary/hu/passengercars/models/saloon/a-class/overview/_jcr_content/root/responsivegrid/tabs/tabitem/hotspot_module/hotspot_simple_image/hotspot_item_1034355614.component.damq5.3195071863479.jpg/mercedes-benz-a-class-v177-design-contentgallery-rearenddesign-02-2730x1536-07-2018.jpg',
              title: 'HANDS-FREE ACCESS',
              x: 80,
              y: 35,
            },
          ],
        },
      ],
    };
    dummy.articles.forEach((a) => {
      let article = new ArticleForm();
      article.patchValue(a);
      this.articles.push(article);
    });
    dummy.images.forEach((i) => {
      let image = new FormControl(i);
      this.images.push(image);
    });
    dummy.smartcards.forEach((smc) => {
      let sm = new SmartcardForm();
      sm.get('image')?.patchValue(smc.image);

      smc.smartpoints.forEach((smp) => {
        let sp = new SmartpointForm();
        sp.setValue(smp);
        (sm.get('smartpoints') as FormArray).push(sp);
      });
      this.smartcards.push(sm);
    });
    this.model.setValue(dummy.model);
    this.seats.setValue(dummy.seats);
    this.design.setValue(dummy.design);
    this.title.setValue(dummy.title);
    this.titleImage.setValue(dummy.titleImage);
  }
  createImageObject(url: string): Iimage {
    return {
      date: new Date(),
      path: url,
    };
  }
  generateObject() {
    let smartcards: Ismartcard[] = [];
    this.smartcards.value.forEach((smc: any) => {
      let smartCard: Ismartcard = {
        image: this.createImageObject(smc.image),
        smartpoints: [],
      };

      smc.smartpoints.forEach((smp: any) => {
        let smartPoint: Ismartpoint = {
          description: smp.description,
          title: smp.title,
          x: smp.x,
          y: smp.y,
          image: smp.image ? this.createImageObject(smp.image) : null,
        };
        smartCard.smartpoints.push(smartPoint);
      });

      smartcards.push(smartCard);
    });

    let images: Iimage[] = [];
    this.images.value.forEach((i: any) => {
      images.push(this.createImageObject(i));
    });

    let articles: Iarticle[] = [];
    this.articles.value.forEach((a: any) => {
      let article: Iarticle = {
        description: a.description,
        title: a.title,
        image: a.image ? this.createImageObject(a.image) : null,
      };
      articles.push(article);
    });

    let model: Imodeldto = {
      name: this.model.value.name!,
      maker: this.model.value.maker!,
    };
    this.cartypeService.addCartype(
      images,
      articles,
      smartcards,
      model,
      this.design.value,
      this.seats.value,
      this.title.value,
      this.createImageObject(this.titleImage.value)
    );
  }
  handleSubmit() {
    this.populateForm();
    if (this.cartypeForm.valid) {
      this.generateObject();
      this.router.navigate(['/cartypes']);
    } else {
      this.cartypeForm.markAllAsTouched();
    }
    console.log(this.cartypeForm);
  }
}
