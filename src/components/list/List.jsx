import React from 'react'



const data = [
  {
    name: 'Opona przód Pirelli Angel Scooter 56P TL 120/70-15 (DOT 3421)',
    code: '2770400',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Angel-Scooter-56P-TL-120-70-15-DOT-3421-2770400-skuter-12783_1.jpg',
  },
  {
    name: 'Opona przód / tył Pirelli Angel Scooter 60P TL 130/60-13',
    code: '2771400',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-tyl-Pirelli-Angel-Scooter-60P-TL-130-60-13-DOT-2771400-skuter-12807_1.jpg',
  },
  {
    name: 'Opona przód / tył Pirelli Angel Scooter 58P TL 120/80-14',
    code: '286400',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-tyl-Pirelli-Angel-Scooter-58P-TL-120-80-14-DOT-286400-skuter-12808_1.jpg',
  },
  {
    name: 'Opona tył Pirelli MT21 rallycross 140/80-18 70R',
    code: '3988300',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-MT21-rallycross-140-80-18-70R-3988300-on-off-road-rally-12813_1.png',
  },
  {
    name: 'Opona przód Pirelli MT21 rallycross 90/90-21 54R',
    code: '3990400',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-MT21-rallycross-90-90-21-54R-3990400-4721-on-off-road-rally-12800_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-MT21-rallycross-90-90-21-54R-3990400-4721-on-off-road-rally-12800_2.jpg',
  },
  {
    name: 'Opona przód / tył Pirelli Angel Scooter 62P TL 120/70-12',
    code: '2770400',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-tyl-Pirelli-Angel-Scooter-62P-TL-120-70-12-DOT-0122-2770400-skuter-12784_1.jpg',
  },
  {
    name: 'Opona przód/tył Pirelli Angel Scooter 55P TL 120/70-14',
    code: '2770300',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-tyl-Pirelli-Angel-Scooter-55P-TL-120-70-14-DOT-4421-2770300-skuter-12782_1.jpg',
  },
  {
    name: 'Opona przód Pirelli Angel Scooter 48P TL 110/70-13',
    code: '2769900',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Angel-Scooter-48P-TL-110-70-13-DOT-4421-skuter-2769900-21-12780_1.jpg',
  },
  {
    name: 'Opona przód pirelli scorpion trail II 54V 90/90-21',
    code: '3745800',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-pirelli-scorpion-trail-II-54V-90-90-21-3745800-enduro-off-road-droga-12812_1.jpg',
  },
  {
    name: 'Opona przód Pirelli scorpion xc mid hard 51r 80/100-21',
    code: '3107800',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-scorpion-xc-mid-hard-51r-80-100-21-3107800-5021-cross-mieszany-teren-12797_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-scorpion-xc-mid-hard-51r-80-100-21-3107800-5021-cross-mieszany-teren-12797_2.jpg',
  },
  {
    name: 'Opona tył Pirelli scorpion mx soft 57M 100/90-19',
    code: '2901500',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx-soft-57M-100-90-19-2901500-0122-cross-enduro-piasek-bloto-12788_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx-soft-57M-100-90-19-2901500-0122-cross-enduro-piasek-bloto-12788_2.jpg',
  },
  {
    name: 'Opona tył Pirelli scorpion mx32 Mid-hard 62M 110/90-19',
    code: '3842700',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-Mid-hard-62M-110-90-19-3842700-4721-cross-srednio-twardy-teren-12798_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-Mid-hard-62M-110-90-19-3842700-4721-cross-srednio-twardy-teren-12798_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Diablo Rosso II 73W TL 180/55ZR17 / 180/55-17',
    code: '2068500',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-II-73W-TL-180-55ZR17-180-55-17-DOT-drogowe-sport-2068500-12803_2.jpg',
    image2: 'https://amracing.pl/pl/products/opona-tyl-pirelli-scorpion-mx32-mid-soft-57m-110-90-19-2588500-cross-enduro-miekki-srednio-twarde-nawierzchnie-12805?query_id=3',
  },
  {
    name: 'Opona przód Pirelli scorpion mx32 mid-soft 51M 80/100-21',
    code: '2588600',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-scorpion-mx32-mid-soft-51M-80-100-21-2588600-cross-enduro-miekki-srednio-twarde-nawierzchnie-12806_1.png',
  },
  {
    name: 'Opona tył Pirelli scorpion X 57M 100/90-19',
    code: '2588700',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-X-57M-100-90-19-2588700-5121-0222-cross-enduro-twarde-srednio-twarde-nawierzchnie-12796_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-X-57M-100-90-19-2588700-5121-0222-cross-enduro-twarde-srednio-twarde-nawierzchnie-12796_2.jpg',
  },
  {
    name: 'Opona przód pirelli scorpion trail II 59V 110/80r19 / 110/80-19',
    code: '2526500',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-pirelli-scorpion-trail-II-59V-110-80r19-110-80-19-2526500-1122-enduro-off-road-droga-12789_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-pirelli-scorpion-trail-II-59V-110-80r19-110-80-19-2526500-1122-enduro-off-road-droga-12789_2.jpg',
  },
  {
    name: 'Opona tył pirelli scorpion trail II 72V 170/60r17 / 170/60-19',
    code: '2802900',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-72V-170-60r17-170-60-19-2802900-0122-enduro-off-road-droga-12786_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-72V-170-60r17-170-60-19-2802900-0122-enduro-off-road-droga-12786_2.jpg',
  },
  {
    name: 'Opona tył pirelli scorpion trail II 70V 150/70r18 / 150/70-18',
    code: '2803200',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-70V-150-70r18-150-70-18-2803200-1122-enduro-off-road-droga-12787_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-70V-150-70r18-150-70-18-2803200-1122-enduro-off-road-droga-12787_2.jpg',
  },
  {
    name: 'Opona przód pirelli scorpion trail II 60V 120/70r19 / 120/70-19',
    code: '2802800',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-pirelli-scorpion-trail-II-60V-120-70r19-120-70-19-2802800-0122-enduro-off-road-droga-12785_1.jpg',
  },
  {
    name: 'Opona tył Pirelli scorpion mx32 mid-soft 57M 100/90-19',
    code: '2588400',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-mid-soft-57M-100-90-19-2588400-4221-cross-enduro-miekki-srednio-twarde-nawierzchnie-12795_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-mid-soft-57M-100-90-19-2588400-4221-cross-enduro-miekki-srednio-twarde-nawierzchnie-12795_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel ST 73W TL 180/55ZR17 / 180/55-17',
    code: '1868500',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-ST-73W-TL-180-55ZR17-180-55-17-DOT-4721-drogowe-sport-touring-1868500-21-12760_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-ST-73W-TL-180-55ZR17-180-55-17-DOT-4721-drogowe-sport-touring-1868500-21-12760_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel ST 69W TL 160/60ZR17 / 160/60-17',
    code: '1868800',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-ST-69W-TL-160-60ZR17-160-60-17-DOT-4721-drogowe-sport-touring-1868800-21-12761_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-ST-69W-TL-160-60ZR17-160-60-17-DOT-4721-drogowe-sport-touring-1868800-21-12761_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel GT 73W TL 190/50ZR17 / 190/50-17',
    code: '2317700',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-73W-TL-190-50ZR17-190-50-17-DOT-4220-drogowe-sport-touring-2317700-20-12763_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-73W-TL-190-50ZR17-190-50-17-DOT-4220-drogowe-sport-touring-2317700-20-12763_3.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel GT 73W TL 180/55ZR17 / 180/55-17',
    code: '2317600',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-73W-TL-180-55ZR17-180-55-17-DOT-1721-drogowe-sport-touring-2317600-21-12764_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-73W-TL-180-55ZR17-180-55-17-DOT-1721-drogowe-sport-touring-2317600-21-12764_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel GT 69W TL 160/60ZR17 / 160/60-17',
    code: '2317400',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-69W-TL-160-60ZR17-160-60-17-DOT-4221-drogowe-sport-touring-2317400-21-12765_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-GT-69W-TL-160-60ZR17-160-60-17-DOT-4221-drogowe-sport-touring-2317400-21-12765_2.jpg',
  },
  {
    name: 'Opona przód Pirelli Angel GT 58W TL 120/70ZR17 / 120/70-17',
    code: '3976000',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Angel-GT-58W-TL-120-70ZR17-120-70-17-DOT-4321-drogowe-sport-touring-3976000-21-12766_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Angel-GT-58W-TL-120-70ZR17-120-70-17-DOT-4321-drogowe-sport-touring-3976000-21-12766_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Diablo Rosso II 73W TL 190/50ZR17 / 190/50-17',
    code: '2068600',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-II-73W-TL-190-50ZR17-190-50-17-DOT-3521-drogowe-sport-2068600-21-12775_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-II-73W-TL-190-50ZR17-190-50-17-DOT-3521-drogowe-sport-2068600-21-12775_2.jpg',
  },
  {
    name: 'Opona przód Pirelli Diablo Rosso II 58W TL 120/70ZR17 / 120/70-17',
    code: '2291900',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Diablo-Rosso-II-58W-TL-120-70ZR17-120-70-17-DOT-5021-drogowe-sport-2291900-21-12776_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Diablo-Rosso-II-58W-TL-120-70ZR17-120-70-17-DOT-5021-drogowe-sport-2291900-21-12776_2.jpg',
  },
  {
    name: 'Opona przód Pirelli Diablo Rosso III 58W TL 120/70ZR17 / 120/70-17',
    code: '2635200',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Diablo-Rosso-III-58W-TL-120-70ZR17-120-70-17-DOT-4621-drogowe-sport-2635200-21-12777_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-Diablo-Rosso-III-58W-TL-120-70ZR17-120-70-17-DOT-4621-drogowe-sport-2635200-21-12777_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Diablo Rosso III 73W TL 180/55ZR17 / 180/55-17',
    code: '2635500',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-III-73W-TL-180-55ZR17-180-55-17-DOT-5121-drogowe-sport-2635500-21-12778_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-III-73W-TL-180-55ZR17-180-55-17-DOT-5121-drogowe-sport-2635500-21-12778_1.jpg',
  },
  {
    name: 'Opona tył Pirelli Diablo Rosso III 73W TL 190/50ZR17 / 190/50-17',
    code: '2635700',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-III-73W-TL-190-50ZR17-190-50-17-DOT-5221-drogowe-sport-2635700-21-12779_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Diablo-Rosso-III-73W-TL-190-50ZR17-190-50-17-DOT-5221-drogowe-sport-2635700-21-12779_2.jpg',
  },
  {
    name: 'Opona tył pirelli scorpion trail II 69V 150/70r17 / 150/70-17',
    code: '2527100',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-69V-150-70r17-150-70-17-4921-enduro-off-road-droga-2527100-21-12790_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-pirelli-scorpion-trail-II-69V-150-70r17-150-70-17-4921-enduro-off-road-droga-2527100-21-12790_2.jpg',
  },
  {
    name: 'Opona tył Pirelli scorpion mx32 mid-soft 57M 100/90-19',
    code: '2588400',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-mid-soft-57M-100-90-19-2588400-4221-cross-enduro-miekki-srednio-twarde-nawierzchnie-12795_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-scorpion-mx32-mid-soft-57M-100-90-19-2588400-4221-cross-enduro-miekki-srednio-twarde-nawierzchnie-12795_2.jpg',
  },
  {
    name: 'Opona tył Pirelli Angel ST 73W TL 190/50ZR17 / 190/50-17',
    code: '1868700',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Pirelli-Angel-ST-73W-TL-190-50ZR17-190-50-17-DOT-43-4420-drogowe-sport-touring-1868700-20-12759_1.jpg',
  },
  {
    name: 'Opona przód Pirelli scorpion extra x 51M 80/100-21',
    code: '2588300',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-scorpion-extra-x-51M-80-100-21-2588300-cross-enduro-srednio-twarde-nawierzchnie-12830_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Pirelli-scorpion-extra-x-51M-80-100-21-2588300-cross-enduro-srednio-twarde-nawierzchnie-12830_3.jpg',
  },
  {
    name: 'Opona przód Metzeler Tourance 54S TL 90/90-21',
    code: '3555600',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Tourance-54S-TL-90-90-21-enduro-turystyczne-3555600-12811_1.jpg',
  },
  {
    name: 'Opona przód Metzeler Tourance 59H TL 110/80-19',
    code: '3079800',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Tourance-59H-TL-110-80-19-enduro-turystyczne-3079800-12809_1.jpg',
  },
  {
    name: 'Opona tył Metzeler Tourance 69H TL 150/70r17 / 150/70-17',
    code: '3079900',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-69H-TL-150-70r17-150-70-17-enduro-turystyczne-3079900-12810_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-69H-TL-150-70r17-150-70-17-enduro-turystyczne-3079900-12810_2.jpg',
  },
  {
    name: 'Opona tył METZELER 6 days extreme fim SOFT 70M TT 140/80-18',
    code: '2529900 ',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SOFT-70M-TT-140-80-18-6DAYS1408018S-2529900-4121-3529_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SOFT-70M-TT-140-80-18-6DAYS1408018S-2529900-4121-3529_2.jpg',
    image3: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SOFT-70M-TT-140-80-18-6DAYS1408018S-2529900-4121-3529_3.jpg',
  },
  {
    name: 'Opona tył Metzeler Tourance 65S TL 130/80r17 / 130/80-17',
    code: '1086800',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-65S-TL-130-80r17-130-80-17-4721-enduro-turystyczne-1086800-21-12791_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-65S-TL-130-80r17-130-80-17-4721-enduro-turystyczne-1086800-21-12791_2.jpg',
  },
  {
    name: 'Opona przód Metzeler Roadtec Z6 120/70-17 / 120/70zr17 58W TL',
    code: '1448100',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Roadtec-Z6-120-70-17-120-70zr17-58W-TL-1448100-turystyczny-sport-1448100-12801_1.png',
  },
  {
    name: 'Opona tył Metzeler Roadtec Z6 190/50-17 / 190/50zr17 73W TL',
    code: '1449000',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-190-50-17-190-50zr17-73W-TL-1449000-turystyczny-sport-1449000-12802_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-190-50-17-190-50zr17-73W-TL-1449000-turystyczny-sport-1449000-12802_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Sportec M5 180/55-17 / 180/55zr17 73W TL',
    code: '1927600',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M5-180-55-17-180-55zr17-73W-TL-4021-sport-wyscigi-1927600-21-12768_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M5-180-55-17-180-55zr17-73W-TL-4021-sport-wyscigi-1927600-21-12768_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Sportec M5 160/60-17 / 160/60zr17 69W TL',
    code: '1971300',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M5-160-60-17-160-60zr17-69W-TL-4121-sport-wyscigi-1971300-21-12769_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M5-160-60-17-160-60zr17-69W-TL-4121-sport-wyscigi-1971300-21-12769_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Roadtec Z8 190/50-17 / 190/50zr17 73W TL',
    code: '2284100',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z8-190-50-17-190-50zr17-73W-TL-0922-turystyczny-sport-2284100-22-12770_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z8-190-50-17-190-50zr17-73W-TL-0922-turystyczny-sport-2284100-22-12770_2.jpg',
  },
  {
    name: 'Opona przód Metzeler Roadtec Z8 120/70-17 / 120/70zr17 58W TL',
    code: '2283600',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Roadtec-Z8-120-70-17-120-70zr17-58W-TL-4921-turystyczny-sport-2283600-21-12771_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Roadtec-Z8-120-70-17-120-70zr17-58W-TL-4921-turystyczny-sport-2283600-21-12771_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Sportec M7 180/55-17 / 180/55zr17 73W TL',
    code: '2450300',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M7-180-55-17-180-55zr17-73W-TL-5021-sport-wyscigi-2450300-21-12772_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M7-180-55-17-180-55zr17-73W-TL-5021-sport-wyscigi-2450300-21-12772_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Sportec M7 190/50-17 / 190/50zr17 73W TL',
    code: '2450400',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M7-190-50-17-190-50zr17-73W-TL-3421-sport-wyscigi-2450400-21-12773_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Sportec-M7-190-50-17-190-50zr17-73W-TL-3421-sport-wyscigi-2450400-21-12773_2.jpg',
  },
  {
    name: 'Opona przód Metzeler Sportec M7 120/70-17 / 120/70zr17 58W TL',
    code: '4042800',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Sportec-M7-120-70-17-120-70zr17-58W-TL-4521-sport-wyscigi-4042800-21-12774_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Sportec-M7-120-70-17-120-70zr17-58W-TL-4521-sport-wyscigi-4042800-21-12774_2.jpg',
  },
  {
    name: 'Opona przód Metzeler Tourance Next 59V TL 110/80r19 / 110/80-19 (0822)',
    code: '2084700',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Tourance-Next-59V-TL-110-80r19-110-80-19-0822-enduro-turystyczne-2084700-22-12792_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-Metzeler-Tourance-Next-59V-TL-110-80r19-110-80-19-0822-enduro-turystyczne-2084700-22-12792_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Tourance Next 69V TL 150/70-17 150/r17',
    code: '2084800',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-Next-69V-TL-150-70-17-150-r17-3421-enduro-turystyczne-2084800-21-12793_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-Next-69V-TL-150-70-17-150-r17-3421-enduro-turystyczne-2084800-21-12793_2.jpg',
  },
  {
    name: 'Opona tył Metzeler Tourance Next 69V TL 160/60-17 160/60r17',
    code: '2417000',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-Next-69V-TL-160-60-17-160-60r17-4121-enduro-turystyczne-2417000-21-12794_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Tourance-Next-69V-TL-160-60-17-160-60r17-4121-enduro-turystyczne-2417000-21-12794_2.jpg',
  },
  {
    name: 'Opona przód METZELER 6 days extreme fim soft 54M TT 90/90-21',
    code: '4073200',
    image1: 'https://amracing.pl/pol_pl_Opona-przod-METZELER-6-days-extreme-fim-soft-54M-TT-90-90-21-4073200-enduro-hard-enduro-4073200-12814_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-przod-METZELER-6-days-extreme-fim-soft-54M-TT-90-90-21-4073200-enduro-hard-enduro-4073200-12814_2.jpg',
    image3: 'https://amracing.pl/pol_pl_Opona-przod-METZELER-6-days-extreme-fim-soft-54M-TT-90-90-21-4073200-enduro-hard-enduro-4073200-12814_3.jpg',
  },
  {
    name: 'Opona tył Metzeler Roadtec Z6 180/55-17 / 180/55zr17 73W TL',
    code: '1448600',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-180-55-17-180-55zr17-73W-TL-4221-1448600-turystyczny-sport-1448600-21-12726_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-180-55-17-180-55zr17-73W-TL-4221-1448600-turystyczny-sport-1448600-21-12726_3.jpg',
  },
  {
    name: 'Opona tył Metzeler Roadtec Z8 180/55-17 / 180/55zr17 73W TL',
    code: '2283700 ',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z8-180-55-17-180-55zr17-73W-TL-3821-2283700-turystyczny-sport-2283700-21-12727_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z8-180-55-17-180-55zr17-73W-TL-3821-2283700-turystyczny-sport-2283700-21-12727_3.jpg',
  },
  {
    name: 'Opona tył Metzeler Roadtec Z6 160/60-17 / 160/60zr17 73W TL',
    code: '1448700 ',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-160-60-17-160-60zr17-73W-TL-5221-1448700-turystyczny-sport-1448700-21-12767_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-Metzeler-Roadtec-Z6-160-60-17-160-60zr17-73W-TL-5221-1448700-turystyczny-sport-1448700-21-12767_2.jpg',
  },
  {
    name: 'Opona tył METZELER 6 days extreme fim 70M TT 140/80-18 - 6DAYS1408018',
    code: '2477700 ',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-70M-TT-140-80-18-6DAYS1408018-2477700-enduro-hard-enduro-2477700-12804_1.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-70M-TT-140-80-18-6DAYS1408018-2477700-enduro-hard-enduro-2477700-12804_3.jpg',
  },
  {
    name: 'Opona tył METZELER 6 days extreme fim SUPER SOFT 70M TT',
    code: '3864900 ',
    image1: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SUPER-SOFT-70M-TT-140-80-18-6DAYS1408018SS-3864900-5121-3864900-21-12799_2.jpg',
    image2: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SUPER-SOFT-70M-TT-140-80-18-6DAYS1408018SS-3864900-5121-3864900-21-12799_3.jpg',
    image3: 'https://amracing.pl/pol_pl_Opona-tyl-METZELER-6-days-extreme-fim-SUPER-SOFT-70M-TT-140-80-18-6DAYS1408018SS-3864900-5121-3864900-21-12799_1.jpg',
  },
]

const List = () => {
  return (
    <div className='container'>
        {
          data.map(({code, name, image1, image2, image3, image4}) => {
            return (
            <div className='row'>
                <p className='col-md-4 my-auto'>{name}</p>
                <p className='col-md-2 my-auto'>{code}</p>
                <div  className='col-md-2 my-auto'>
                  <a href={image1}><img src={image1} className='image'/></a>
                </div>
                <div  className='col-md-2 my-auto'>
                  <a href={image2}><img src={image2} className='image'/></a>
                </div>
                <div  className='col-md-2 my-auto'>
                  <a href={image3}><img src={image3} className='image'/></a>
                </div>
                <div  className='col-md-2 my-auto'>
                  <a href={image4}><img src={image4} className='image'/></a>
                </div>
            </div>
            )
          })
        }
    </div>
  )
}

export default List