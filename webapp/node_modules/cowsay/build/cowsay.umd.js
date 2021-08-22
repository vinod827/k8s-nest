(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('.cows/ackbar.cow'), require('.cows/aperture-blank.cow'), require('.cows/aperture.cow'), require('.cows/armadillo.cow'), require('.cows/atat.cow'), require('.cows/atom.cow'), require('.cows/awesome-face.cow'), require('.cows/banana.cow'), require('.cows/bearface.cow'), require('.cows/bees.cow'), require('.cows/bill-the-cat.cow'), require('.cows/biohazard.cow'), require('.cows/bishop.cow'), require('.cows/black-mesa.cow'), require('.cows/box.cow'), require('.cows/broken-heart.cow'), require('.cows/C3PO.cow'), require('.cows/cake.cow'), require('.cows/cake-with-candles.cow'), require('.cows/cat2.cow'), require('.cows/cat.cow'), require('.cows/catfence.cow'), require('.cows/charizardvice.cow'), require('.cows/charlie.cow'), require('.cows/chessmen.cow'), require('.cows/chito.cow'), require('.cows/claw-arm.cow'), require('.cows/clippy.cow'), require('.cows/companion-cube.cow'), require('.cows/cowfee.cow'), require('.cows/cthulhu-mini.cow'), require('.cows/cube.cow'), require('.cows/dalek.cow'), require('.cows/dalek-shooting.cow'), require('.cows/docker-whale.cow'), require('.cows/dolphin.cow'), require('.cows/ebi_furai.cow'), require('.cows/elephant2.cow'), require('.cows/elephant.cow'), require('.cows/explosion.cow'), require('.cows/fat-banana.cow'), require('.cows/fat-cow.cow'), require('.cows/fence.cow'), require('.cows/fire.cow'), require('.cows/fox.cow'), require('.cows/ghost.cow'), require('.cows/glados.cow'), require('.cows/goat2.cow'), require('.cows/golden-eagle.cow'), require('.cows/hand.cow'), require('.cows/happy-whale.cow'), require('.cows/hippie.cow'), require('.cows/hiya.cow'), require('.cows/hiyoko.cow'), require('.cows/homer.cow'), require('.cows/hypno.cow'), require('.cows/ibm.cow'), require('.cows/iwashi.cow'), require('.cows/jellyfish.cow'), require('.cows/karl_marx.cow'), require('.cows/kilroy.cow'), require('.cows/king.cow'), require('.cows/kitten.cow'), require('.cows/knight.cow'), require('.cows/lamb2.cow'), require('.cows/lamb.cow'), require('.cows/lightbulb.cow'), require('.cows/lobster.cow'), require('.cows/lollerskates.cow'), require('.cows/mailchimp.cow'), require('.cows/maze-runner.cow'), require('.cows/minotaur.cow'), require('.cows/mona-lisa.cow'), require('.cows/mooghidjirah.cow'), require('.cows/moojira.cow'), require('.cows/mule.cow'), require('.cows/nyan.cow'), require('.cows/octopus.cow'), require('.cows/okazu.cow'), require('.cows/owl.cow'), require('.cows/pawn.cow'), require('.cows/periodic-table.cow'), require('.cows/personality-sphere.cow'), require('.cows/pinball-machine.cow'), require('.cows/psychiatrichelp2.cow'), require('.cows/psychiatrichelp.cow'), require('.cows/pterodactyl.cow'), require('.cows/queen.cow'), require('.cows/R2-D2.cow'), require('.cows/radio.cow'), require('.cows/renge.cow'), require('.cows/robot.cow'), require('.cows/robotfindskitten.cow'), require('.cows/roflcopter.cow'), require('.cows/rook.cow'), require('.cows/sachiko.cow'), require('.cows/seahorse-big.cow'), require('.cows/seahorse.cow'), require('.cows/shikato.cow'), require('.cows/shrug.cow'), require('.cows/smiling-octopus.cow'), require('.cows/snoopy.cow'), require('.cows/snoopyhouse.cow'), require('.cows/snoopysleep.cow'), require('.cows/spidercow.cow'), require('.cows/squid.cow'), require('.cows/sudowoodo.cow'), require('.cows/tableflip.cow'), require('.cows/taxi.cow'), require('.cows/template.cow'), require('.cows/threader.cow'), require('.cows/threecubes.cow'), require('.cows/toaster.cow'), require('.cows/tortoise.cow'), require('.cows/tux-big.cow'), require('.cows/tweety-bird.cow'), require('.cows/USA.cow'), require('.cows/vader.cow'), require('.cows/weeping-angel.cow'), require('.cows/wizard.cow'), require('.cows/wood.cow'), require('.cows/world.cow'), require('.cows/yasuna_01.cow'), require('.cows/yasuna_02.cow'), require('.cows/yasuna_03a.cow'), require('.cows/yasuna_03.cow'), require('.cows/yasuna_04.cow'), require('.cows/yasuna_05.cow'), require('.cows/yasuna_06.cow'), require('.cows/yasuna_07.cow'), require('.cows/yasuna_08.cow'), require('.cows/yasuna_09.cow'), require('.cows/yasuna_10.cow'), require('.cows/yasuna_11.cow'), require('.cows/yasuna_12.cow'), require('.cows/yasuna_13.cow'), require('.cows/yasuna_14.cow'), require('.cows/yasuna_16.cow'), require('.cows/yasuna_17.cow'), require('.cows/yasuna_18.cow'), require('.cows/yasuna_19.cow'), require('.cows/yasuna_20.cow'), require('.cows/ymd_udon.cow'), require('.cows/zen-noh-milk.cow')) :
	typeof define === 'function' && define.amd ? define(['exports', '.cows/ackbar.cow', '.cows/aperture-blank.cow', '.cows/aperture.cow', '.cows/armadillo.cow', '.cows/atat.cow', '.cows/atom.cow', '.cows/awesome-face.cow', '.cows/banana.cow', '.cows/bearface.cow', '.cows/bees.cow', '.cows/bill-the-cat.cow', '.cows/biohazard.cow', '.cows/bishop.cow', '.cows/black-mesa.cow', '.cows/box.cow', '.cows/broken-heart.cow', '.cows/C3PO.cow', '.cows/cake.cow', '.cows/cake-with-candles.cow', '.cows/cat2.cow', '.cows/cat.cow', '.cows/catfence.cow', '.cows/charizardvice.cow', '.cows/charlie.cow', '.cows/chessmen.cow', '.cows/chito.cow', '.cows/claw-arm.cow', '.cows/clippy.cow', '.cows/companion-cube.cow', '.cows/cowfee.cow', '.cows/cthulhu-mini.cow', '.cows/cube.cow', '.cows/dalek.cow', '.cows/dalek-shooting.cow', '.cows/docker-whale.cow', '.cows/dolphin.cow', '.cows/ebi_furai.cow', '.cows/elephant2.cow', '.cows/elephant.cow', '.cows/explosion.cow', '.cows/fat-banana.cow', '.cows/fat-cow.cow', '.cows/fence.cow', '.cows/fire.cow', '.cows/fox.cow', '.cows/ghost.cow', '.cows/glados.cow', '.cows/goat2.cow', '.cows/golden-eagle.cow', '.cows/hand.cow', '.cows/happy-whale.cow', '.cows/hippie.cow', '.cows/hiya.cow', '.cows/hiyoko.cow', '.cows/homer.cow', '.cows/hypno.cow', '.cows/ibm.cow', '.cows/iwashi.cow', '.cows/jellyfish.cow', '.cows/karl_marx.cow', '.cows/kilroy.cow', '.cows/king.cow', '.cows/kitten.cow', '.cows/knight.cow', '.cows/lamb2.cow', '.cows/lamb.cow', '.cows/lightbulb.cow', '.cows/lobster.cow', '.cows/lollerskates.cow', '.cows/mailchimp.cow', '.cows/maze-runner.cow', '.cows/minotaur.cow', '.cows/mona-lisa.cow', '.cows/mooghidjirah.cow', '.cows/moojira.cow', '.cows/mule.cow', '.cows/nyan.cow', '.cows/octopus.cow', '.cows/okazu.cow', '.cows/owl.cow', '.cows/pawn.cow', '.cows/periodic-table.cow', '.cows/personality-sphere.cow', '.cows/pinball-machine.cow', '.cows/psychiatrichelp2.cow', '.cows/psychiatrichelp.cow', '.cows/pterodactyl.cow', '.cows/queen.cow', '.cows/R2-D2.cow', '.cows/radio.cow', '.cows/renge.cow', '.cows/robot.cow', '.cows/robotfindskitten.cow', '.cows/roflcopter.cow', '.cows/rook.cow', '.cows/sachiko.cow', '.cows/seahorse-big.cow', '.cows/seahorse.cow', '.cows/shikato.cow', '.cows/shrug.cow', '.cows/smiling-octopus.cow', '.cows/snoopy.cow', '.cows/snoopyhouse.cow', '.cows/snoopysleep.cow', '.cows/spidercow.cow', '.cows/squid.cow', '.cows/sudowoodo.cow', '.cows/tableflip.cow', '.cows/taxi.cow', '.cows/template.cow', '.cows/threader.cow', '.cows/threecubes.cow', '.cows/toaster.cow', '.cows/tortoise.cow', '.cows/tux-big.cow', '.cows/tweety-bird.cow', '.cows/USA.cow', '.cows/vader.cow', '.cows/weeping-angel.cow', '.cows/wizard.cow', '.cows/wood.cow', '.cows/world.cow', '.cows/yasuna_01.cow', '.cows/yasuna_02.cow', '.cows/yasuna_03a.cow', '.cows/yasuna_03.cow', '.cows/yasuna_04.cow', '.cows/yasuna_05.cow', '.cows/yasuna_06.cow', '.cows/yasuna_07.cow', '.cows/yasuna_08.cow', '.cows/yasuna_09.cow', '.cows/yasuna_10.cow', '.cows/yasuna_11.cow', '.cows/yasuna_12.cow', '.cows/yasuna_13.cow', '.cows/yasuna_14.cow', '.cows/yasuna_16.cow', '.cows/yasuna_17.cow', '.cows/yasuna_18.cow', '.cows/yasuna_19.cow', '.cows/yasuna_20.cow', '.cows/ymd_udon.cow', '.cows/zen-noh-milk.cow'], factory) :
	(global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.cowsay = {}, global.ackbar_cow, global.apertureBlank_cow, global.aperture_cow, global.armadillo_cow, global.atat_cow, global.atom_cow, global.awesomeFace_cow, global.banana_cow, global.bearface_cow, global.bees_cow, global.billTheCat_cow, global.biohazard_cow, global.bishop_cow, global.blackMesa_cow, global.box_cow, global.brokenHeart_cow, global.C3PO_cow, global.cake_cow, global.cakeWithCandles_cow, global.cat2_cow, global.cat_cow, global.catfence_cow, global.charizardvice_cow, global.charlie_cow, global.chessmen_cow, global.chito_cow, global.clawArm_cow, global.clippy_cow, global.companionCube_cow, global.cowfee_cow, global.cthulhuMini_cow, global.cube_cow, global.dalek_cow, global.dalekShooting_cow, global.dockerWhale_cow, global.dolphin_cow, global.ebi_furai_cow, global.elephant2_cow, global.elephant_cow, global.explosion_cow, global.fatBanana_cow, global.fatCow_cow, global.fence_cow, global.fire_cow, global.fox_cow, global.ghost_cow, global.glados_cow, global.goat2_cow, global.goldenEagle_cow, global.hand_cow, global.happyWhale_cow, global.hippie_cow, global.hiya_cow, global.hiyoko_cow, global.homer_cow, global.hypno_cow, global.ibm_cow, global.iwashi_cow, global.jellyfish_cow, global.karl_marx_cow, global.kilroy_cow, global.king_cow, global.kitten_cow, global.knight_cow, global.lamb2_cow, global.lamb_cow, global.lightbulb_cow, global.lobster_cow, global.lollerskates_cow, global.mailchimp_cow, global.mazeRunner_cow, global.minotaur_cow, global.monaLisa_cow, global.mooghidjirah_cow, global.moojira_cow, global.mule_cow, global.nyan_cow, global.octopus_cow, global.okazu_cow, global.owl_cow, global.pawn_cow, global.periodicTable_cow, global.personalitySphere_cow, global.pinballMachine_cow, global.psychiatrichelp2_cow, global.psychiatrichelp_cow, global.pterodactyl_cow, global.queen_cow, global.R2D2_cow, global.radio_cow, global.renge_cow, global.robot_cow, global.robotfindskitten_cow, global.roflcopter_cow, global.rook_cow, global.sachiko_cow, global.seahorseBig_cow, global.seahorse_cow, global.shikato_cow, global.shrug_cow, global.smilingOctopus_cow, global.snoopy_cow, global.snoopyhouse_cow, global.snoopysleep_cow, global.spidercow_cow, global.squid_cow, global.sudowoodo_cow, global.tableflip_cow, global.taxi_cow, global.template_cow, global.threader_cow, global.threecubes_cow, global.toaster_cow, global.tortoise_cow, global.tuxBig_cow, global.tweetyBird_cow, global.USA_cow, global.vader_cow, global.weepingAngel_cow, global.wizard_cow, global.wood_cow, global.world_cow, global.yasuna_01_cow, global.yasuna_02_cow, global.yasuna_03a_cow, global.yasuna_03_cow, global.yasuna_04_cow, global.yasuna_05_cow, global.yasuna_06_cow, global.yasuna_07_cow, global.yasuna_08_cow, global.yasuna_09_cow, global.yasuna_10_cow, global.yasuna_11_cow, global.yasuna_12_cow, global.yasuna_13_cow, global.yasuna_14_cow, global.yasuna_16_cow, global.yasuna_17_cow, global.yasuna_18_cow, global.yasuna_19_cow, global.yasuna_20_cow, global.ymd_udon_cow, global.zenNohMilk_cow));
}(this, (function (exports, ackbar_cow, apertureBlank_cow, aperture_cow, armadillo_cow, atat_cow, atom_cow, awesomeFace_cow, banana_cow, bearface_cow, bees_cow, billTheCat_cow, biohazard_cow, bishop_cow, blackMesa_cow, box_cow, brokenHeart_cow, C3PO_cow, cake_cow, cakeWithCandles_cow, cat2_cow, cat_cow, catfence_cow, charizardvice_cow, charlie_cow, chessmen_cow, chito_cow, clawArm_cow, clippy_cow, companionCube_cow, cowfee_cow, cthulhuMini_cow, cube_cow, dalek_cow, dalekShooting_cow, dockerWhale_cow, dolphin_cow, ebi_furai_cow, elephant2_cow, elephant_cow, explosion_cow, fatBanana_cow, fatCow_cow, fence_cow, fire_cow, fox_cow, ghost_cow, glados_cow, goat2_cow, goldenEagle_cow, hand_cow, happyWhale_cow, hippie_cow, hiya_cow, hiyoko_cow, homer_cow, hypno_cow, ibm_cow, iwashi_cow, jellyfish_cow, karl_marx_cow, kilroy_cow, king_cow, kitten_cow, knight_cow, lamb2_cow, lamb_cow, lightbulb_cow, lobster_cow, lollerskates_cow, mailchimp_cow, mazeRunner_cow, minotaur_cow, monaLisa_cow, mooghidjirah_cow, moojira_cow, mule_cow, nyan_cow, octopus_cow, okazu_cow, owl_cow, pawn_cow, periodicTable_cow, personalitySphere_cow, pinballMachine_cow, psychiatrichelp2_cow, psychiatrichelp_cow, pterodactyl_cow, queen_cow, R2D2_cow, radio_cow, renge_cow, robot_cow, robotfindskitten_cow, roflcopter_cow, rook_cow, sachiko_cow, seahorseBig_cow, seahorse_cow, shikato_cow, shrug_cow, smilingOctopus_cow, snoopy_cow, snoopyhouse_cow, snoopysleep_cow, spidercow_cow, squid_cow, sudowoodo_cow, tableflip_cow, taxi_cow, template_cow, threader_cow, threecubes_cow, toaster_cow, tortoise_cow, tuxBig_cow, tweetyBird_cow, USA_cow, vader_cow, weepingAngel_cow, wizard_cow, wood_cow, world_cow, yasuna_01_cow, yasuna_02_cow, yasuna_03a_cow, yasuna_03_cow, yasuna_04_cow, yasuna_05_cow, yasuna_06_cow, yasuna_07_cow, yasuna_08_cow, yasuna_09_cow, yasuna_10_cow, yasuna_11_cow, yasuna_12_cow, yasuna_13_cow, yasuna_14_cow, yasuna_16_cow, yasuna_17_cow, yasuna_18_cow, yasuna_19_cow, yasuna_20_cow, ymd_udon_cow, zenNohMilk_cow) { 'use strict';

	function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

	var ackbar_cow__default = /*#__PURE__*/_interopDefaultLegacy(ackbar_cow);
	var apertureBlank_cow__default = /*#__PURE__*/_interopDefaultLegacy(apertureBlank_cow);
	var aperture_cow__default = /*#__PURE__*/_interopDefaultLegacy(aperture_cow);
	var armadillo_cow__default = /*#__PURE__*/_interopDefaultLegacy(armadillo_cow);
	var atat_cow__default = /*#__PURE__*/_interopDefaultLegacy(atat_cow);
	var atom_cow__default = /*#__PURE__*/_interopDefaultLegacy(atom_cow);
	var awesomeFace_cow__default = /*#__PURE__*/_interopDefaultLegacy(awesomeFace_cow);
	var banana_cow__default = /*#__PURE__*/_interopDefaultLegacy(banana_cow);
	var bearface_cow__default = /*#__PURE__*/_interopDefaultLegacy(bearface_cow);
	var bees_cow__default = /*#__PURE__*/_interopDefaultLegacy(bees_cow);
	var billTheCat_cow__default = /*#__PURE__*/_interopDefaultLegacy(billTheCat_cow);
	var biohazard_cow__default = /*#__PURE__*/_interopDefaultLegacy(biohazard_cow);
	var bishop_cow__default = /*#__PURE__*/_interopDefaultLegacy(bishop_cow);
	var blackMesa_cow__default = /*#__PURE__*/_interopDefaultLegacy(blackMesa_cow);
	var box_cow__default = /*#__PURE__*/_interopDefaultLegacy(box_cow);
	var brokenHeart_cow__default = /*#__PURE__*/_interopDefaultLegacy(brokenHeart_cow);
	var C3PO_cow__default = /*#__PURE__*/_interopDefaultLegacy(C3PO_cow);
	var cake_cow__default = /*#__PURE__*/_interopDefaultLegacy(cake_cow);
	var cakeWithCandles_cow__default = /*#__PURE__*/_interopDefaultLegacy(cakeWithCandles_cow);
	var cat2_cow__default = /*#__PURE__*/_interopDefaultLegacy(cat2_cow);
	var cat_cow__default = /*#__PURE__*/_interopDefaultLegacy(cat_cow);
	var catfence_cow__default = /*#__PURE__*/_interopDefaultLegacy(catfence_cow);
	var charizardvice_cow__default = /*#__PURE__*/_interopDefaultLegacy(charizardvice_cow);
	var charlie_cow__default = /*#__PURE__*/_interopDefaultLegacy(charlie_cow);
	var chessmen_cow__default = /*#__PURE__*/_interopDefaultLegacy(chessmen_cow);
	var chito_cow__default = /*#__PURE__*/_interopDefaultLegacy(chito_cow);
	var clawArm_cow__default = /*#__PURE__*/_interopDefaultLegacy(clawArm_cow);
	var clippy_cow__default = /*#__PURE__*/_interopDefaultLegacy(clippy_cow);
	var companionCube_cow__default = /*#__PURE__*/_interopDefaultLegacy(companionCube_cow);
	var cowfee_cow__default = /*#__PURE__*/_interopDefaultLegacy(cowfee_cow);
	var cthulhuMini_cow__default = /*#__PURE__*/_interopDefaultLegacy(cthulhuMini_cow);
	var cube_cow__default = /*#__PURE__*/_interopDefaultLegacy(cube_cow);
	var dalek_cow__default = /*#__PURE__*/_interopDefaultLegacy(dalek_cow);
	var dalekShooting_cow__default = /*#__PURE__*/_interopDefaultLegacy(dalekShooting_cow);
	var dockerWhale_cow__default = /*#__PURE__*/_interopDefaultLegacy(dockerWhale_cow);
	var dolphin_cow__default = /*#__PURE__*/_interopDefaultLegacy(dolphin_cow);
	var ebi_furai_cow__default = /*#__PURE__*/_interopDefaultLegacy(ebi_furai_cow);
	var elephant2_cow__default = /*#__PURE__*/_interopDefaultLegacy(elephant2_cow);
	var elephant_cow__default = /*#__PURE__*/_interopDefaultLegacy(elephant_cow);
	var explosion_cow__default = /*#__PURE__*/_interopDefaultLegacy(explosion_cow);
	var fatBanana_cow__default = /*#__PURE__*/_interopDefaultLegacy(fatBanana_cow);
	var fatCow_cow__default = /*#__PURE__*/_interopDefaultLegacy(fatCow_cow);
	var fence_cow__default = /*#__PURE__*/_interopDefaultLegacy(fence_cow);
	var fire_cow__default = /*#__PURE__*/_interopDefaultLegacy(fire_cow);
	var fox_cow__default = /*#__PURE__*/_interopDefaultLegacy(fox_cow);
	var ghost_cow__default = /*#__PURE__*/_interopDefaultLegacy(ghost_cow);
	var glados_cow__default = /*#__PURE__*/_interopDefaultLegacy(glados_cow);
	var goat2_cow__default = /*#__PURE__*/_interopDefaultLegacy(goat2_cow);
	var goldenEagle_cow__default = /*#__PURE__*/_interopDefaultLegacy(goldenEagle_cow);
	var hand_cow__default = /*#__PURE__*/_interopDefaultLegacy(hand_cow);
	var happyWhale_cow__default = /*#__PURE__*/_interopDefaultLegacy(happyWhale_cow);
	var hippie_cow__default = /*#__PURE__*/_interopDefaultLegacy(hippie_cow);
	var hiya_cow__default = /*#__PURE__*/_interopDefaultLegacy(hiya_cow);
	var hiyoko_cow__default = /*#__PURE__*/_interopDefaultLegacy(hiyoko_cow);
	var homer_cow__default = /*#__PURE__*/_interopDefaultLegacy(homer_cow);
	var hypno_cow__default = /*#__PURE__*/_interopDefaultLegacy(hypno_cow);
	var ibm_cow__default = /*#__PURE__*/_interopDefaultLegacy(ibm_cow);
	var iwashi_cow__default = /*#__PURE__*/_interopDefaultLegacy(iwashi_cow);
	var jellyfish_cow__default = /*#__PURE__*/_interopDefaultLegacy(jellyfish_cow);
	var karl_marx_cow__default = /*#__PURE__*/_interopDefaultLegacy(karl_marx_cow);
	var kilroy_cow__default = /*#__PURE__*/_interopDefaultLegacy(kilroy_cow);
	var king_cow__default = /*#__PURE__*/_interopDefaultLegacy(king_cow);
	var kitten_cow__default = /*#__PURE__*/_interopDefaultLegacy(kitten_cow);
	var knight_cow__default = /*#__PURE__*/_interopDefaultLegacy(knight_cow);
	var lamb2_cow__default = /*#__PURE__*/_interopDefaultLegacy(lamb2_cow);
	var lamb_cow__default = /*#__PURE__*/_interopDefaultLegacy(lamb_cow);
	var lightbulb_cow__default = /*#__PURE__*/_interopDefaultLegacy(lightbulb_cow);
	var lobster_cow__default = /*#__PURE__*/_interopDefaultLegacy(lobster_cow);
	var lollerskates_cow__default = /*#__PURE__*/_interopDefaultLegacy(lollerskates_cow);
	var mailchimp_cow__default = /*#__PURE__*/_interopDefaultLegacy(mailchimp_cow);
	var mazeRunner_cow__default = /*#__PURE__*/_interopDefaultLegacy(mazeRunner_cow);
	var minotaur_cow__default = /*#__PURE__*/_interopDefaultLegacy(minotaur_cow);
	var monaLisa_cow__default = /*#__PURE__*/_interopDefaultLegacy(monaLisa_cow);
	var mooghidjirah_cow__default = /*#__PURE__*/_interopDefaultLegacy(mooghidjirah_cow);
	var moojira_cow__default = /*#__PURE__*/_interopDefaultLegacy(moojira_cow);
	var mule_cow__default = /*#__PURE__*/_interopDefaultLegacy(mule_cow);
	var nyan_cow__default = /*#__PURE__*/_interopDefaultLegacy(nyan_cow);
	var octopus_cow__default = /*#__PURE__*/_interopDefaultLegacy(octopus_cow);
	var okazu_cow__default = /*#__PURE__*/_interopDefaultLegacy(okazu_cow);
	var owl_cow__default = /*#__PURE__*/_interopDefaultLegacy(owl_cow);
	var pawn_cow__default = /*#__PURE__*/_interopDefaultLegacy(pawn_cow);
	var periodicTable_cow__default = /*#__PURE__*/_interopDefaultLegacy(periodicTable_cow);
	var personalitySphere_cow__default = /*#__PURE__*/_interopDefaultLegacy(personalitySphere_cow);
	var pinballMachine_cow__default = /*#__PURE__*/_interopDefaultLegacy(pinballMachine_cow);
	var psychiatrichelp2_cow__default = /*#__PURE__*/_interopDefaultLegacy(psychiatrichelp2_cow);
	var psychiatrichelp_cow__default = /*#__PURE__*/_interopDefaultLegacy(psychiatrichelp_cow);
	var pterodactyl_cow__default = /*#__PURE__*/_interopDefaultLegacy(pterodactyl_cow);
	var queen_cow__default = /*#__PURE__*/_interopDefaultLegacy(queen_cow);
	var R2D2_cow__default = /*#__PURE__*/_interopDefaultLegacy(R2D2_cow);
	var radio_cow__default = /*#__PURE__*/_interopDefaultLegacy(radio_cow);
	var renge_cow__default = /*#__PURE__*/_interopDefaultLegacy(renge_cow);
	var robot_cow__default = /*#__PURE__*/_interopDefaultLegacy(robot_cow);
	var robotfindskitten_cow__default = /*#__PURE__*/_interopDefaultLegacy(robotfindskitten_cow);
	var roflcopter_cow__default = /*#__PURE__*/_interopDefaultLegacy(roflcopter_cow);
	var rook_cow__default = /*#__PURE__*/_interopDefaultLegacy(rook_cow);
	var sachiko_cow__default = /*#__PURE__*/_interopDefaultLegacy(sachiko_cow);
	var seahorseBig_cow__default = /*#__PURE__*/_interopDefaultLegacy(seahorseBig_cow);
	var seahorse_cow__default = /*#__PURE__*/_interopDefaultLegacy(seahorse_cow);
	var shikato_cow__default = /*#__PURE__*/_interopDefaultLegacy(shikato_cow);
	var shrug_cow__default = /*#__PURE__*/_interopDefaultLegacy(shrug_cow);
	var smilingOctopus_cow__default = /*#__PURE__*/_interopDefaultLegacy(smilingOctopus_cow);
	var snoopy_cow__default = /*#__PURE__*/_interopDefaultLegacy(snoopy_cow);
	var snoopyhouse_cow__default = /*#__PURE__*/_interopDefaultLegacy(snoopyhouse_cow);
	var snoopysleep_cow__default = /*#__PURE__*/_interopDefaultLegacy(snoopysleep_cow);
	var spidercow_cow__default = /*#__PURE__*/_interopDefaultLegacy(spidercow_cow);
	var squid_cow__default = /*#__PURE__*/_interopDefaultLegacy(squid_cow);
	var sudowoodo_cow__default = /*#__PURE__*/_interopDefaultLegacy(sudowoodo_cow);
	var tableflip_cow__default = /*#__PURE__*/_interopDefaultLegacy(tableflip_cow);
	var taxi_cow__default = /*#__PURE__*/_interopDefaultLegacy(taxi_cow);
	var template_cow__default = /*#__PURE__*/_interopDefaultLegacy(template_cow);
	var threader_cow__default = /*#__PURE__*/_interopDefaultLegacy(threader_cow);
	var threecubes_cow__default = /*#__PURE__*/_interopDefaultLegacy(threecubes_cow);
	var toaster_cow__default = /*#__PURE__*/_interopDefaultLegacy(toaster_cow);
	var tortoise_cow__default = /*#__PURE__*/_interopDefaultLegacy(tortoise_cow);
	var tuxBig_cow__default = /*#__PURE__*/_interopDefaultLegacy(tuxBig_cow);
	var tweetyBird_cow__default = /*#__PURE__*/_interopDefaultLegacy(tweetyBird_cow);
	var USA_cow__default = /*#__PURE__*/_interopDefaultLegacy(USA_cow);
	var vader_cow__default = /*#__PURE__*/_interopDefaultLegacy(vader_cow);
	var weepingAngel_cow__default = /*#__PURE__*/_interopDefaultLegacy(weepingAngel_cow);
	var wizard_cow__default = /*#__PURE__*/_interopDefaultLegacy(wizard_cow);
	var wood_cow__default = /*#__PURE__*/_interopDefaultLegacy(wood_cow);
	var world_cow__default = /*#__PURE__*/_interopDefaultLegacy(world_cow);
	var yasuna_01_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_01_cow);
	var yasuna_02_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_02_cow);
	var yasuna_03a_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_03a_cow);
	var yasuna_03_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_03_cow);
	var yasuna_04_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_04_cow);
	var yasuna_05_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_05_cow);
	var yasuna_06_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_06_cow);
	var yasuna_07_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_07_cow);
	var yasuna_08_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_08_cow);
	var yasuna_09_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_09_cow);
	var yasuna_10_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_10_cow);
	var yasuna_11_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_11_cow);
	var yasuna_12_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_12_cow);
	var yasuna_13_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_13_cow);
	var yasuna_14_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_14_cow);
	var yasuna_16_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_16_cow);
	var yasuna_17_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_17_cow);
	var yasuna_18_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_18_cow);
	var yasuna_19_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_19_cow);
	var yasuna_20_cow__default = /*#__PURE__*/_interopDefaultLegacy(yasuna_20_cow);
	var ymd_udon_cow__default = /*#__PURE__*/_interopDefaultLegacy(ymd_udon_cow);
	var zenNohMilk_cow__default = /*#__PURE__*/_interopDefaultLegacy(zenNohMilk_cow);

	var ansiRegex = () => {
		const pattern = [
			'[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:[a-zA-Z\\d]*(?:;[a-zA-Z\\d]*)*)?\\u0007)',
			'(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PRZcf-ntqry=><~]))'
		].join('|');

		return new RegExp(pattern, 'g');
	};

	var stripAnsi = input => typeof input === 'string' ? input.replace(ansiRegex(), '') : input;

	/* eslint-disable yoda */
	var isFullwidthCodePoint = x => {
		if (Number.isNaN(x)) {
			return false;
		}

		// code points are derived from:
		// http://www.unix.org/Public/UNIDATA/EastAsianWidth.txt
		if (
			x >= 0x1100 && (
				x <= 0x115f ||  // Hangul Jamo
				x === 0x2329 || // LEFT-POINTING ANGLE BRACKET
				x === 0x232a || // RIGHT-POINTING ANGLE BRACKET
				// CJK Radicals Supplement .. Enclosed CJK Letters and Months
				(0x2e80 <= x && x <= 0x3247 && x !== 0x303f) ||
				// Enclosed CJK Letters and Months .. CJK Unified Ideographs Extension A
				(0x3250 <= x && x <= 0x4dbf) ||
				// CJK Unified Ideographs .. Yi Radicals
				(0x4e00 <= x && x <= 0xa4c6) ||
				// Hangul Jamo Extended-A
				(0xa960 <= x && x <= 0xa97c) ||
				// Hangul Syllables
				(0xac00 <= x && x <= 0xd7a3) ||
				// CJK Compatibility Ideographs
				(0xf900 <= x && x <= 0xfaff) ||
				// Vertical Forms
				(0xfe10 <= x && x <= 0xfe19) ||
				// CJK Compatibility Forms .. Small Form Variants
				(0xfe30 <= x && x <= 0xfe6b) ||
				// Halfwidth and Fullwidth Forms
				(0xff01 <= x && x <= 0xff60) ||
				(0xffe0 <= x && x <= 0xffe6) ||
				// Kana Supplement
				(0x1b000 <= x && x <= 0x1b001) ||
				// Enclosed Ideographic Supplement
				(0x1f200 <= x && x <= 0x1f251) ||
				// CJK Unified Ideographs Extension B .. Tertiary Ideographic Plane
				(0x20000 <= x && x <= 0x3fffd)
			)
		) {
			return true;
		}

		return false;
	};

	var stringWidth = str => {
		if (typeof str !== 'string' || str.length === 0) {
			return 0;
		}

		str = stripAnsi(str);

		let width = 0;

		for (let i = 0; i < str.length; i++) {
			const code = str.codePointAt(i);

			// Ignore control characters
			if (code <= 0x1F || (code >= 0x7F && code <= 0x9F)) {
				continue;
			}

			// Ignore combining characters
			if (code >= 0x300 && code <= 0x36F) {
				continue;
			}

			// Surrogates
			if (code > 0xFFFF) {
				i++;
			}

			width += isFullwidthCodePoint(code) ? 2 : 1;
		}

		return width;
	};

	var say = function (text, wrap) {
		var delimiters = {
			first : ["/", "\\"],
			middle : ["|", "|"],
			last : ["\\", "/"],
			only : ["<", ">"]
		};

		return format(text, wrap, delimiters);
	};

	var think = function (text, wrap) {
		var delimiters = {
			first : ["(", ")"],
			middle : ["(", ")"],
			last : ["(", ")"],
			only : ["(", ")"]
		};

		return format(text, wrap, delimiters);
	};

	function format (text, wrap, delimiters) {
		var lines = split(text, wrap);
		var maxLength = max(lines);

		var balloon;
		if (lines.length === 1) {
			balloon = [
				" " + top(maxLength),
				delimiters.only[0] + " " + lines[0] + " " + delimiters.only[1],
				" " + bottom(maxLength)
			];
		} else {
			balloon = [" " + top(maxLength)];

			for (var i = 0, len = lines.length; i < len; i += 1) {
				var delimiter;

				if (i === 0) {
					delimiter = delimiters.first;
				} else if (i === len - 1) {
					delimiter = delimiters.last;
				} else {
					delimiter = delimiters.middle;
				}

				balloon.push(delimiter[0] + " " + pad(lines[i], maxLength) + " " + delimiter[1]);
			}

			balloon.push(" " + bottom(maxLength));
		}

		return balloon.join("\n");
	}

	function split (text, wrap) {
		text = text.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '').replace(/\t/g, '        ');

		var lines = [];
		if (!wrap) {
			lines = text.split("\n");
		} else {
			var start = 0;
			while (start < text.length) {
				var nextNewLine = text.indexOf("\n", start);

				var wrapAt = Math.min(start + wrap, nextNewLine === -1 ? text.length : nextNewLine);

				lines.push(text.substring(start, wrapAt));
				start = wrapAt;

				// Ignore next new line
				if (text.charAt(start) === "\n") {
					start += 1;
				}
			}
		}

		return lines;
	}

	function max (lines) {
		var max = 0;
		for (var i = 0, len = lines.length; i < len; i += 1) {
			if (stringWidth(lines[i]) > max) {
				max = stringWidth(lines[i]);
			}
		}

		return max;
	}

	function pad (text, length) {
		return text + (new Array(length - stringWidth(text) + 1)).join(" ");
	}

	function top (length) {
		return new Array(length + 3).join("_");
	}

	function bottom (length) {
		return new Array(length + 3).join("-");
	}

	var balloon = {
		say: say,
		think: think
	};

	var replacer = function (cow, variables) {
		var eyes = escapeRe(variables.eyes);
		var eyeL = eyes.charAt(0);
		var eyeR = eyes.charAt(1);
		var tongue = escapeRe(variables.tongue);

		if (cow.indexOf("$the_cow") !== -1) {
			cow = extractTheCow(cow);
		}

		return cow
			.replace(/\$thoughts/g, variables.thoughts)
			.replace(/\$eyes/g, eyes)
			.replace(/\$tongue/g, tongue)
			.replace(/\$\{eyes\}/g, eyes)
			.replace(/\$eye/, eyeL)
			.replace(/\$eye/, eyeR)
			.replace(/\$\{tongue\}/g, tongue)
		;
	};

	/*
	 * "$" dollar signs must be doubled before being used in a regex replace
	 * This can occur in eyes or tongue.
	 * For example:
	 *
	 * cowsay -g Moo!
	 *
	 * cowsay -e "\$\$" Moo!
	 */
	function escapeRe (s) {
		if (s && s.replace) {
			return s.replace(/\$/g, "$$$$");
		}
		return s;
	}

	function extractTheCow (cow) {
		cow = cow.replace(/\r\n?|[\n\u2028\u2029]/g, "\n").replace(/^\uFEFF/, '');
		var match = /\$the_cow\s*=\s*<<"*EOC"*;*\n([\s\S]+)\nEOC\n/.exec(cow);

		if (!match) {
			console.error("Cannot parse cow file\n", cow);
			return cow;
		} else {
			return match[1].replace(/\\{2}/g, "\\").replace(/\\@/g, "@").replace(/\\\$/g, "$");
		}
	}

	var modes = {
		"b" : {
			eyes : "==",
			tongue : "  "
		},
		"d" : {
			eyes : "xx",
			tongue : "U "
		},
		"g" : {
			eyes : "$$",
			tongue : "  "
		},
		"p" : {
			eyes : "@@",
			tongue : "  "
		},
		"s" : {
			eyes : "**",
			tongue : "U "
		},
		"t" : {
			eyes : "--",
			tongue : "  "
		},
		"w" : {
			eyes : "OO",
			tongue : "  "
		},
		"y" : {
			eyes : "..",
			tongue : "  "
		}
	};

	var faces = function (options) {
		for (var mode in modes) {
			if (options[mode] === true) {
				return modes[mode];
			}
		}

		return {
			eyes : options.e || "oo",
			tongue : options.T || "  "
		};
	};

	var DEFAULT_COW = "$the_cow = <<\"EOC\";\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||----w |\n                ||     ||\nEOC\n";

	var beavis_zen = "##\n## Beavis, with Zen philosophy removed.\n##\n$the_cow = <<EOC;\n   $thoughts         __------~~-,\n    $thoughts      ,'            ,\n          /               \\\\\n         /                :\n        |                  '\n        |                  |\n        |                  |\n         |   _--           |\n         _| =-.     .-.   ||\n         $eye|/$eye/       _.   |\n         /  ~          \\\\ |\n       (____\\@)  ___~    |\n          |_===~~~.`    |\n       _______.--~     |\n       \\\\________       |\n                \\\\      |\n              __/-___-- -__\n             /            _ \\\\\nEOC\n";

	var bong = "##\n## A cow with a bong, from lars@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n         $thoughts\n          $thoughts\n            ^__^ \n    _______/($eyes)\n/\\\\/(       /(__)\n   | W----|| |~|\n   ||     || |~|  ~~\n             |~|  ~\n             |_| o\n             |#|/\n            _+#+_\nEOC\n";

	var budFrogs = "##\n## The Budweiser frogs\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n          oO)-.                       .-(Oo\n         /__  _\\\\                     /_  __\\\\\n         \\\\  \\\\(  |     ()~()         |  )/  /\n          \\\\__|\\\\ |    (-___-)        | /|__/\n          '  '--'    ==`-'==        '--'  '\nEOC\n";

	var bunny = "##\n## A cute little wabbit\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\\n        \\\\ /\\\\\n        ( )\n      .( o ).\nEOC\n";

	var cheese = "##\n## The cheese from milk & cheese\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n      _____   _________\n     /     \\\\_/         |\n    |                 ||\n    |                 ||\n   |    ###\\\\  /###   | |\n   |     $eye  \\\\/  $eye    | |\n  /|                 | |\n / |        <        |\\\\ \\\\\n| /|                 | | |\n| |     \\\\_______/   |  | |\n| |        $tongue       | / /\n/||                 /|||\n   ----------------|\n        | |    | |\n        ***    ***\n       /___\\\\  /___\\\\\nEOC\n";

	var cower = "##\n## A cowering cow\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n        ,__, |    | \n        ($eyes)\\\\|    |___\n        (__)\\\\|    |   )\\\\_\n         $tongue  |    |_w |  \\\\\n             |    |  ||   *\n\n             Cower....\nEOC\n";

	var daemon = "##\n## 4.4 >> 5.4\n##\n$the_cow = <<EOC;\n   $thoughts         ,        ,\n    $thoughts       /(        )`\n     $thoughts      \\\\ \\\\___   / |\n            /- _  `-/  '\n           (/\\\\/ \\\\ \\\\   /\\\\\n           / /   | `    \\\\\n           $eye $eye   ) /    |\n           `-^--'`<     '\n          (_.)  _  )   /\n           `.___/`    /\n             `-----' /\n<----.     __ / __   \\\\\n<----|====O)))==) \\\\) /====\n<----'    `--' `.__,' \\\\\n             |        |\n              \\\\       /\n        ______( (_  / \\\\______\n      ,'  ,-----'   |        \\\\\n      `--{__________)        \\\\/\nEOC\n";

	var doge = "##\n## Doge\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n\n           _                _\n          / /.           _-//\n         / ///         _-   /\n        //_-//=========     /\n      _///        //_ ||   ./\n    _|                 -__-||\n   |  __              - \\\\   \\\n  |  |#-       _-|_           |\n  |            |#|||       _   |  \n |  _==_                       ||\n- ==|.=.=|_ =                  |\n|  |-|-  ___                  |\n|    --__   _                /\n||     ===                  |\n |                     _. //\n  ||_         __-   _-  _|\n     \\_______/  ___/  _|\n                   --*\nEOC\n";

	var dragonAndCow = "##\n## A dragon smiting a cow, possible credit to kube@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n                       $thoughts                    ^    /^\n                        $thoughts                  / \\\\  // \\\\\n                         $thoughts   |\\\\___/|      /   \\\\//  .\\\\\n                          $thoughts  /O  O  \\\\__  /    //  | \\\\ \\\\           *----*\n                            /     /  \\\\/_/    //   |  \\\\  \\\\          \\\\   |\n                            \\@___\\@`    \\\\/_   //    |   \\\\   \\\\         \\\\/\\\\ \\\\\n                           0/0/|       \\\\/_ //     |    \\\\    \\\\         \\\\  \\\\\n                       0/0/0/0/|        \\\\///      |     \\\\     \\\\       |  |\n                    0/0/0/0/0/_|_ /   (  //       |      \\\\     _\\\\     |  /\n                 0/0/0/0/0/0/`/,_ _ _/  ) ; -.    |    _ _\\\\.-~       /   /\n                             ,-}        _      *-.|.-~-.           .~    ~\n            \\\\     \\\\__/        `/\\\\      /                 ~-. _ .-~      /\n             \\\\____($eyes)           *.   }            {                   /\n             (    (--)          .----~-.\\\\        \\\\-`                 .~\n             //__\\\\\\\\$tongue\\\\__ Ack!   ///.----..<        \\\\             _ -~\n            //    \\\\\\\\               ///-._ _ _ _ _ _ _{^ - - - - ~\nEOC\n";

	var dragon = "##\n## The Whitespace Dragon\n##\n$the_cow = <<EOC;\n      $thoughts                    / \\\\  //\\\\\n       $thoughts    |\\\\___/|      /   \\\\//  \\\\\\\\\n            /$eye  $eye  \\\\__  /    //  | \\\\ \\\\    \n           /     /  \\\\/_/    //   |  \\\\  \\\\  \n           \\@_^_\\@'/   \\\\/_   //    |   \\\\   \\\\ \n           //_^_/     \\\\/_ //     |    \\\\    \\\\\n        ( //) |        \\\\///      |     \\\\     \\\\\n      ( / /) _|_ /   )  //       |      \\\\     _\\\\\n    ( // /) '/,_ _ _/  ( ; -.    |    _ _\\\\.-~        .-~~~^-.\n  (( / / )) ,-{        _      `-.|.-~-.           .~         `.\n (( // / ))  '/\\\\      /                 ~-. _ .-~      .-~^-.  \\\\\n (( /// ))      `.   {            }                   /      \\\\  \\\\\n  (( / ))     .----~-.\\\\        \\\\-'                 .~         \\\\  `. \\\\^-.\n             ///.----..>        \\\\             _ -~             `.  ^-`  ^-_\n               ///-._ _ _ _ _ _ _}^ - - - - ~                     ~-- ,.-~\n                                                                  /.-~\nEOC\n";

	var elephantInSnake = "##\n## Do we need to explain this?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts              ....       \n           ........    .      \n          .            .      \n         .             .      \n.........              .......\n..............................\n\nElephant inside ASCII snake\nEOC\n";

	var eyes = "##\n## Evil-looking eyes\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n                                   .::!!!!!!!:.\n  .!!!!!:.                        .:!!!!!!!!!!!!\n  ~~~~!!!!!!.                 .:!!!!!!!!!UWWW\\$\\$\\$ \n      :\\$\\$NWX!!:           .:!!!!!!XUWW\\$\\$\\$\\$\\$\\$\\$\\$\\$P \n      \\$\\$\\$\\$\\$##WX!:      .<!!!!UW\\$\\$\\$\\$\"  \\$\\$\\$\\$\\$\\$\\$\\$# \n      \\$\\$\\$\\$\\$  \\$\\$\\$UX   :!!UW\\$\\$\\$\\$\\$\\$\\$\\$\\$   4\\$\\$\\$\\$\\$* \n      ^\\$\\$\\$B  \\$\\$\\$\\$\\\\     \\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$   d\\$\\$R\" \n        \"*\\$bd\\$\\$\\$\\$      '*\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$\\$o+#\" \n             \"\"\"\"          \"\"\"\"\"\"\" \nEOC\n";

	var flamingSheep = "##\n## The flaming sheep, contributed by Geordan Rosario (geordan@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts            .    .     .   \n   $thoughts      .  . .     `  ,     \n    $thoughts    .; .  : .' :  :  : . \n     $thoughts   i..`: i` i.i.,i  i . \n      $thoughts   `,--.|i |i|ii|ii|i: \n           U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.||' \n           \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)'  \n             $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)    \n                `YY~~~~YY'    \n                 ||    ||     \nEOC\n";

	var ghostbusters = "##\n## Ghostbusters!\n##\n$the_cow = <<EOC;\n          $thoughts\n           $thoughts\n            $thoughts          __---__\n                    _-       /--______\n               __--( /     \\\\ )XXXXXXXXXXX\\\\v.\n             .-XXX(   $eye   $eye  )XXXXXXXXXXXXXXX-\n            /XXX(       U     )        XXXXXXX\\\\\n          /XXXXX(              )--_  XXXXXXXXXXX\\\\\n         /XXXXX/ (      O     )   XXXXXX   \\\\XXXXX\\\\\n         XXXXX/   /            XXXXXX   \\\\__ \\\\XXXXX\n         XXXXXX__/          XXXXXX         \\\\__---->\n ---___  XXX__/          XXXXXX      \\\\__         /\n   \\\\-  --__/   ___/\\\\  XXXXXX            /  ___--/=\n    \\\\-\\\\    ___/    XXXXXX              '--- XXXXXX\n       \\\\-\\\\/XXX\\\\ XXXXXX                      /XXXXX\n         \\\\XXXXXXXXX   \\\\                    /XXXXX/\n          \\\\XXXXXX      >                 _/XXXXX/\n            \\\\XXXXX--__/              __-- XXXX/\n             -XXXXXXXX---------------  XXXXXX-\n                \\\\XXXXXXXXXXXXXXXXXXXXXXXXXX/\n                  \"\"VXXXXXXXXXXXXXXXXXXV\"\"\nEOC\n";

	var goat = "##\n## ejm97 http://www.ascii-art.de/ascii/ghi/goat.txt\n##\n$the_cow = <<EOC;\n       $thoughts\n        $thoughts\n         $thoughts  _))\n           > $eye\\\\     _~\n           `;'\\\\\\\\__-' \\\\_\n              | )  _ \\\\ \\\\\n             / / ``   w w\n            w w\nEOC\n\n\n\n\n\n";

	var hedgehog = "##\n## A cute little hedgehog\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ..:::::::::.\n    ::::::::::::::\n   /. `::::::::::::\n  O__,_:::::::::::'\nEOC\n";

	var hellokitty = "##\n## Hello Kitty\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n      /\\\\_)o<\n     |      \\\\\n     | $eye . $eye|\n      \\\\_____/\n         $tongue\nEOC\n";

	var kiss = "##\n## A lovers' empbrace\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n             ,;;;;;;;,\n            ;;;;;;;;;;;,\n           ;;;;;'_____;'\n           ;;;(/))))|((\\\\\n           _;;((((((|))))\n          / |_\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\n     .--~(  \\\\ ~))))))))))))\n    /     \\\\  `\\\\-(((((((((((\\\\\\\\\n    |    | `\\\\   ) |\\\\       /|)\n     |    |  `. _/  \\\\_____/ |\n      |    , `\\\\~            /\n       |    \\\\  \\\\           /\n      | `.   `\\\\|          /\n      |   ~-   `\\\\        /\n       \\\\____~._/~ -_,   (\\\\\n        |-----|\\\\   \\\\    ';;\n       |      | :;;;'     \\\\\n      |  /    |            |\n      |       |            |\nEOC\n";

	var kitty = "##\n## A kitten of sorts, I think\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts\n       (\"`-'  '-/\") .___..--' ' \"`-._\n         ` $eye_ $eye  )    `-.   (      ) .`-.__. `)\n         (_Y_.) ' ._   )   `._` ;  `` -. .-'\n      _.. `--'_..-_/   /--' _ .' ,4\n   ( i l ),-''  ( l i),'  ( ( ! .-'    \nEOC\n";

	var koala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts\n       ___  \n     {~$eye_$eye~}\n      ( Y )\n     ()~*~()   \n     (_)-(_)   \nEOC\n";

	var kosh = "##\n## It's a Kosh Cow!\n##\n$the_cow = <<EOC;\n    $thoughts\n     $thoughts\n      $thoughts\n  ___       _____     ___\n /   \\\\     /    /|   /   \\\\\n|     |   /    / |  |     |\n|     |  /____/  |  |     |     \n|     |  |    |  |  |     |\n|     |  | {} | /   |     |\n|     |  |____|/    |     |\n|     |    |==|     |     |\n|      \\\\___________/      |\n|                         |\n|                         |\nEOC\n";

	var lukeKoala = "##\n## From the canonical koala collection\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts          .\n       ___   //\n     {~$eye_$eye~}// \n      ( Y )K/  \n     ()~*~()   \n     (_)-(_)   \n     Luke    \n     Skywalker\n     koala   \nEOC\n";

	var mechAndCow = "$the_cow = <<EOC;\n      $thoughts                            |     |\n       $thoughts                        ,--|     |-.\n                         __,----|  |     | |\n                       ,;::     |  `_____' |\n                       `._______|    i^i   |\n                                `----| |---'| .\n                           ,-------._| |== ||//\n                           |       |_|P`.  /'/\n                           `-------' 'Y Y/'/'\n                                     .==\\ /_\\\n   ^__^                             /   /'|  `i\n   ($eyes)\\_______                   /'   /  |   |\n   (__)\\       )\\/\\             /'    /   |   `i\n    $tongue ||----w |           ___,;`----'.___L_,-'`\\__\n       ||     ||          i_____;----\\.____i\"\"\\____\\\nEOC\n";

	var meow = "##\n## A meowing tiger?\n##\n$the_cow = <<EOC;\n  $thoughts\n   $thoughts ,   _ ___.--'''`--''//-,-_--_.\n      \\\\`\"' ` || \\\\\\\\ \\\\ \\\\\\\\/ / // / ,-\\\\\\\\`,_\n     /'`  \\\\ \\\\ || Y  | \\\\|/ / // / - |__ `-,\n    /\\$eye\"\\\\  ` \\\\ `\\\\ |  | ||/ // | \\\\/  \\\\  `-._`-,_.,\n   /  _.-. `.-\\\\,___/\\\\ _/|_/_\\\\_\\\\/|_/ |     `-._._)\n   `-'``/  /  |  // \\\\__/\\\\__  /  \\\\__/ \\\\\n    $tongue  `-'  /-\\\\/  | -|   \\\\__ \\\\   |-' |\n          __/\\\\ / _/ \\\\/ __,-'   ) ,' _|'\n         (((__/(((_.' ((___..-'((__,'\nEOC\n";

	var milk = "##\n## Milk from Milk and Cheese\n##\n$the_cow = <<EOC;\n $thoughts     ____________ \n  $thoughts    |__________|\n      /           /\\\\\n     /           /  \\\\\n    /___________/___/|\n    |          |     |\n    |  ==\\\\ /== |     |\n    |   $eye   $eye  | \\\\ \\\\ |\n    |     <    |  \\\\ \\\\|\n   /|          |   \\\\ \\\\\n  / |  \\\\_____/ |   / /\n / /|    $tongue    |  / /|\n/||\\\\|          | /||\\\\/\n    -------------|   \n        | |    | | \n       <__/    \\\\__>\nEOC\n";

	var moofasa = "##\n## MOOfasa.\n##\n$the_cow = <<EOC;\n       $thoughts    ____\n        $thoughts  /    \\\\\n          | ^__^ |\n          | ($eyes) |______\n          | (__) |      )\\\\/\\\\\n           \\\\____/|----w |\n                ||     ||\n\n\t         Moofasa\nEOC\n";

	var moose = "$the_cow = <<EOC;\n  $thoughts\n   $thoughts   \\\\_\\\\_    _/_/\n    $thoughts      \\\\__/\n           ($eyes)\\\\_______\n           (__)\\\\       )\\\\/\\\\\n            $tongue ||----- |\n               ||     ||\nEOC\n";

	var mutilated = "##\n## A mutilated cow, from aspolito@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n       $thoughts   \\\\_______\n v__v   $thoughts  \\\\   O   )\n ($eyes)      ||----w |\n (__)      ||     ||  \\\\/\\\\\n  $tongue\nEOC\n";

	var ren = "##\n## Ren \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n    ____  \n   /# /_\\\\_\n  |  |/$eye\\\\$eye\\\\\n  |  \\\\\\\\_/_/\n / |_   |  \n|  ||\\\\_ ~| \n|  ||| \\\\/  \n|  |||_    \n \\\\//  |    \n  ||  |    \n  ||_  \\\\   \n  \\\\_|  o|  \n  /\\\\___/   \n /  ||||__ \n    (___)_)\nEOC\n";

	var satanic = "##\n## Satanic cow, source unknown.\n##\n$the_cow = <<EOC;\n     $thoughts\n      $thoughts  (__)  \n         (\\\\/)  \n  /-------\\\\/    \n / | 666 ||$tongue  \n*  ||----||      \n   ~~    ~~      \nEOC\n";

	var sheep = "##\n## The non-flaming sheep.\n##\n$the_cow = <<EOC\n  $thoughts\n   $thoughts\n       __     \n      U${eyes}U\\\\.'\\@\\@\\@\\@\\@\\@`.\n      \\\\__/(\\@\\@\\@\\@\\@\\@\\@\\@\\@\\@)\n        $tongue (\\@\\@\\@\\@\\@\\@\\@\\@)\n           `YY~~~~YY'\n            ||    ||\nEOC\n";

	var skeleton = "##\n## This 'Scowleton' brought to you by one of \n## {appel,kube,rowe}@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n          $thoughts      (__)      \n           $thoughts     /$eyes|  \n            $thoughts   (_\"_)*+++++++++*\n                   //I#\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\I\\\\\n                   I[I|I|||||I I `\n                   I`I'///'' I I\n                   I I       I I\n                   ~ ~       ~ ~\n                     Scowleton\nEOC\n";

	var small = "##\n## A small cow, artist unknown\n##\n$eyes = \"..\" unless ($eyes);\n$the_cow = <<EOC;\n       $thoughts   ,__,\n        $thoughts  ($eyes)____\n           (__)    )\\\\\n            $tongue||--|| *\nEOC\n";

	var squirrel = "$the_cow = <<EOC;\n  $thoughts\n     $thoughts\n                  _ _\n       | \\__/|  .~    ~.\n       /$eyes `./      .'\n      {o__,   \\    {\n        / .  . )    \\\n        `-` '-' \\    }\n       .(   _(   )_.'\n      '---.~_ _ _|\n                                                     \nEOC\n";

	var stegosaurus = "##\n## A stegosaur with a top hat?\n##\n$the_cow = <<EOC;\n$thoughts                             .       .\n $thoughts                           / `.   .' \" \n  $thoughts                  .---.  <    > <    >  .---.\n   $thoughts                 |    \\\\  \\\\ - ~ ~ - /  /    |\n         _____          ..-~             ~-..-~\n        |     |   \\\\~~~\\\\.'                    `./~~~/\n       ---------   \\\\__/                        \\\\__/\n      .'  $eye    \\\\     /               /       \\\\  \" \n     (_____,    `._.'               |         }  \\\\/~~~/\n      `----.          /       }     |        /    \\\\__/\n            `-.      |       /      |       /      `. ,~~|\n                ~-.__|      /_ - ~ ^|      /- _      `..-‘ / \\\\  /\\\\\n                     |     /        |     /     ~-.     `-/ _ \\\\/__\\\\\n                     |_____|        |_____|         ~ - . _ _ _ _ _>\nEOC\n";

	var stimpy = "##\n## Stimpy!\n##\n$the_cow = <<EOC;\n  $thoughts     .    _  .    \n   $thoughts    |\\\\_|/__/|    \n       / / \\\\/ \\\\  \\\\  \n      /__|$eye||$eye|__ \\\\ \n     |/_ \\\\_/\\\\_/ _\\\\ |  \n     | | (____) | ||  \n     \\\\/\\\\___/\\\\__/  // \n     (_/         ||\n      |          ||\n      |          ||\\\\   \n       \\\\        //_/  \n        \\\\______//\n       __ || __||\n      (____(____)\nEOC\n";

	var supermilker = "##\n## A cow being milked, probably from Lars Smith (lars@csua.berkeley.edu)\n##\n$the_cow = <<EOC;\n  $thoughts   ^__^\n   $thoughts  ($eyes)\\\\_______        ________\n      (__)\\\\       )\\\\/\\\\    |Super |\n       $tongue ||----W |       |Milker|\n          ||    UDDDDDDDDD|______|\nEOC\n";

	var surgery = "##\n## A cow operation, artist unknown\n##\n$the_cow = <<EOC;\n          $thoughts           \\\\  / \n           $thoughts           \\\\/  \n               (__)    /\\\\         \n               ($eyes)   O  O        \n               _\\\\/_   //         \n         *    (    ) //       \n          \\\\  (\\\\\\\\    //       \n           \\\\(  \\\\\\\\    )                              \n            (   \\\\\\\\   )   /\\\\                          \n  ___[\\\\______/^^^^^^^\\\\__/) o-)__                     \n |\\\\__[=======______//________)__\\\\                    \n \\\\|_______________//____________|                    \n     |||      || //||     |||\n     |||      || @.||     |||                        \n      ||      \\\\/  .\\\\/      ||                        \n                 . .                                 \n                '.'.`                                \n\n            COW-OPERATION                           \nEOC\n";

	var telebears = "##\n## A cow performing an unnatural act, artist unknown.\n##\n$the_cow = <<EOC;\n      $thoughts                _\n       $thoughts              (_)   <-- TeleBEARS\n        $thoughts   ^__^       / \\\\\n         $thoughts  ($eyes)\\\\_____/_\\\\ \\\\\n            (__)\\\\  you  ) /\n             $tongue ||----w ((\n                ||     ||>> \nEOC\n";

	var turkey = "##\n## Turkey!\n##\n$the_cow = <<EOC;\n  $thoughts                                  ,+*^^*+___+++_\n   $thoughts                           ,*^^^^              )\n    $thoughts                       _+*                     ^**+_\n     $thoughts                    +^       _ _++*+_+++_,         )\n              _+^^*+_    (     ,+*^ ^          \\\\+_        )\n             {       )  (    ,(    ,_+--+--,      ^)      ^\\\\\n            { (\\@)    } f   ,(  ,+-^ __*_*_  ^^\\\\_   ^\\\\       )\n           {:;-/    (_+*-+^^^^^+*+*<_ _++_)_    )    )      /\n          ( /  (    (        ,___    ^*+_+* )   <    <      \\\\\n           U _/     )    *--<  ) ^\\\\-----++__)   )    )       )\n            (      )  _(^)^^))  )  )\\\\^^^^^))^*+/    /       /\n          (      /  (_))_^)) )  )  ))^^^^^))^^^)__/     +^^\n         (     ,/    (^))^))  )  ) ))^^^^^^^))^^)       _)\n          *+__+*       (_))^)  ) ) ))^^^^^^))^^^^^)____*^\n          \\\\             \\\\_)^)_)) ))^^^^^^^^^^))^^^^)\n           (_             ^\\\\__^^^^^^^^^^^^))^^^^^^^)\n             ^\\\\___            ^\\\\__^^^^^^))^^^^^^^^)\\\\\\\\\n                  ^^^^^\\\\uuu/^^\\\\uuu/^^^^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\^\\\\\n                     ___) >____) >___   ^\\\\_\\\\_\\\\_\\\\_\\\\_\\\\_\\\\)\n                    ^^^//\\\\\\\\_^^//\\\\\\\\_^       ^(\\\\_\\\\_\\\\_\\\\)\n                      ^^^ ^^ ^^^ ^\nEOC\n";

	var turtle = "##\n## A mysterious turtle...\n##\n$the_cow = <<EOC;\n    $thoughts                                  ___-------___\n     $thoughts                             _-~~             ~~-_\n      $thoughts                         _-~                    /~-_\n             /^\\\\__/^\\\\         /~  \\\\                   /    \\\\\n           /|  $eye|| $eye|        /      \\\\_______________/        \\\\\n          | |___||__|      /       /                \\\\          \\\\\n          |          \\\\    /      /                    \\\\          \\\\\n          |   (_______) /______/                        \\\\_________ \\\\\n          |      $tongue / /         \\\\                      /            \\\\\n           \\\\         \\\\^\\\\\\\\         \\\\                  /               \\\\     /\n             \\\\         ||           \\\\______________/      _-_       //\\\\__//\n               \\\\       ||------_-~~-_ ------------- \\\\ --/~   ~\\\\    || __/\n                 ~-----||====/~     |==================|       |/~~~~~\n                  (_(__/  ./     /                    \\\\_\\\\      \\\\.\n                         (_(___/                         \\\\_____)_)\nEOC\n";

	var tux = "##\n## TuX\n## (c) pborys@p-soft.silesia.linux.org.pl \n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n        .--.\n       |$eye_$eye |\n       |:_/ |\n      //   \\\\ \\\\\n     (|     | )\n    /'\\\\_   _/`\\\\\n    \\\\___)=(___/\n\nEOC\n";

	var vaderKoala = "##\n## Another canonical koala?\n##\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts        .\n     .---.  //\n    Y|$eye $eye|Y// \n   /_(i=i)K/ \n   ~()~*~()~  \n    (_)-(_)   \n\n     Darth \n     Vader    \n     koala        \nEOC\n";

	var whale = "# whale\n#\n# modified from https://www.reddit.com/r/pics/comments/25ji0n/man_face_to_face_with_whale/chi1kdy?context=3\n$the_cow = <<EOC;\n   $thoughts\n    $thoughts\n     $thoughts\n                '-.\n      .---._     \\\\ \\.--'\n    /       `-..__)  ,-'\n   |    0           /\n    \\--.__,   .__.,`\n     `-.___'._\\\\_.'\n\nEOC\n";

	var www = "##\n## A cow wadvertising the World Wide Web, from lim@csua.berkeley.edu\n##\n$the_cow = <<EOC;\n        $thoughts   ^__^\n         $thoughts  ($eyes)\\\\_______\n            (__)\\\\       )\\\\/\\\\\n             $tongue ||--WWW |\n                ||     ||\nEOC\n";

	function convertToCliOptions(browserOptions) {
	  const cliOptions = {
	    e: browserOptions.eyes || 'oo',
	    T: browserOptions.tongue || '  ',
	    n: browserOptions.wrap,
	    W: browserOptions.wrapLength || 40,
	    text: browserOptions.text || '',
	    _: browserOptions.text || [],
	    f: browserOptions.cow,
	  };
	  if (browserOptions.mode) {
	    // converts mode: 'b' to b: true
	    cliOptions[browserOptions.mode] = true;
	  }
	  return cliOptions;
	}

	function doIt (options, sayAloud) {
	  const cow = options.f || DEFAULT_COW;
		const face = faces(options);
		face.thoughts = sayAloud ? "\\" : "o";

		const action = sayAloud ? "say" : "think";
		return balloon[action](options.text || options._.join(" "), options.n ? null : options.W) + "\n" + replacer(cow, face);
	}

	function say$1(browserOptions) {
	  return doIt(convertToCliOptions(browserOptions), true);
	}

	function think$1(browserOptions) {
	  return doIt(convertToCliOptions(browserOptions), false);
	}

	Object.defineProperty(exports, 'ACKBAR', {
		enumerable: true,
		get: function () {
			return ackbar_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'APERTURE_BLANK', {
		enumerable: true,
		get: function () {
			return apertureBlank_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'APERTURE', {
		enumerable: true,
		get: function () {
			return aperture_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ARMADILLO', {
		enumerable: true,
		get: function () {
			return armadillo_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ATAT', {
		enumerable: true,
		get: function () {
			return atat_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ATOM', {
		enumerable: true,
		get: function () {
			return atom_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'AWESOME_FACE', {
		enumerable: true,
		get: function () {
			return awesomeFace_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BANANA', {
		enumerable: true,
		get: function () {
			return banana_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BEARFACE', {
		enumerable: true,
		get: function () {
			return bearface_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BEES', {
		enumerable: true,
		get: function () {
			return bees_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BILL_THE_CAT', {
		enumerable: true,
		get: function () {
			return billTheCat_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BIOHAZARD', {
		enumerable: true,
		get: function () {
			return biohazard_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BISHOP', {
		enumerable: true,
		get: function () {
			return bishop_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BLACK_MESA', {
		enumerable: true,
		get: function () {
			return blackMesa_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BOX', {
		enumerable: true,
		get: function () {
			return box_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'BROKEN_HEART', {
		enumerable: true,
		get: function () {
			return brokenHeart_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'C3PO', {
		enumerable: true,
		get: function () {
			return C3PO_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CAKE', {
		enumerable: true,
		get: function () {
			return cake_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CAKE_WITH_CANDLES', {
		enumerable: true,
		get: function () {
			return cakeWithCandles_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CAT2', {
		enumerable: true,
		get: function () {
			return cat2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CAT', {
		enumerable: true,
		get: function () {
			return cat_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CATFENCE', {
		enumerable: true,
		get: function () {
			return catfence_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CHARIZARDVICE', {
		enumerable: true,
		get: function () {
			return charizardvice_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CHARLIE', {
		enumerable: true,
		get: function () {
			return charlie_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CHESSMEN', {
		enumerable: true,
		get: function () {
			return chessmen_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CHITO', {
		enumerable: true,
		get: function () {
			return chito_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CLAW_ARM', {
		enumerable: true,
		get: function () {
			return clawArm_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CLIPPY', {
		enumerable: true,
		get: function () {
			return clippy_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'COMPANION_CUBE', {
		enumerable: true,
		get: function () {
			return companionCube_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'COWFEE', {
		enumerable: true,
		get: function () {
			return cowfee_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CTHULHU_MINI', {
		enumerable: true,
		get: function () {
			return cthulhuMini_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'CUBE', {
		enumerable: true,
		get: function () {
			return cube_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'DALEK', {
		enumerable: true,
		get: function () {
			return dalek_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'DALEK_SHOOTING', {
		enumerable: true,
		get: function () {
			return dalekShooting_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'DOCKER_WHALE', {
		enumerable: true,
		get: function () {
			return dockerWhale_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'DOLPHIN', {
		enumerable: true,
		get: function () {
			return dolphin_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'EBI_FURAI', {
		enumerable: true,
		get: function () {
			return ebi_furai_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ELEPHANT2', {
		enumerable: true,
		get: function () {
			return elephant2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ELEPHANT', {
		enumerable: true,
		get: function () {
			return elephant_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'EXPLOSION', {
		enumerable: true,
		get: function () {
			return explosion_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'FAT_BANANA', {
		enumerable: true,
		get: function () {
			return fatBanana_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'FAT_COW', {
		enumerable: true,
		get: function () {
			return fatCow_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'FENCE', {
		enumerable: true,
		get: function () {
			return fence_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'FIRE', {
		enumerable: true,
		get: function () {
			return fire_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'FOX', {
		enumerable: true,
		get: function () {
			return fox_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'GHOST', {
		enumerable: true,
		get: function () {
			return ghost_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'GLADOS', {
		enumerable: true,
		get: function () {
			return glados_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'GOAT2', {
		enumerable: true,
		get: function () {
			return goat2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'GOLDEN_EAGLE', {
		enumerable: true,
		get: function () {
			return goldenEagle_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HAND', {
		enumerable: true,
		get: function () {
			return hand_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HAPPY_WHALE', {
		enumerable: true,
		get: function () {
			return happyWhale_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HIPPIE', {
		enumerable: true,
		get: function () {
			return hippie_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HIYA', {
		enumerable: true,
		get: function () {
			return hiya_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HIYOKO', {
		enumerable: true,
		get: function () {
			return hiyoko_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HOMER', {
		enumerable: true,
		get: function () {
			return homer_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'HYPNO', {
		enumerable: true,
		get: function () {
			return hypno_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'IBM', {
		enumerable: true,
		get: function () {
			return ibm_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'IWASHI', {
		enumerable: true,
		get: function () {
			return iwashi_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'JELLYFISH', {
		enumerable: true,
		get: function () {
			return jellyfish_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'KARL_MARX', {
		enumerable: true,
		get: function () {
			return karl_marx_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'KILROY', {
		enumerable: true,
		get: function () {
			return kilroy_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'KING', {
		enumerable: true,
		get: function () {
			return king_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'KITTEN', {
		enumerable: true,
		get: function () {
			return kitten_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'KNIGHT', {
		enumerable: true,
		get: function () {
			return knight_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'LAMB2', {
		enumerable: true,
		get: function () {
			return lamb2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'LAMB', {
		enumerable: true,
		get: function () {
			return lamb_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'LIGHTBULB', {
		enumerable: true,
		get: function () {
			return lightbulb_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'LOBSTER', {
		enumerable: true,
		get: function () {
			return lobster_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'LOLLERSKATES', {
		enumerable: true,
		get: function () {
			return lollerskates_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MAILCHIMP', {
		enumerable: true,
		get: function () {
			return mailchimp_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MAZE_RUNNER', {
		enumerable: true,
		get: function () {
			return mazeRunner_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MINOTAUR', {
		enumerable: true,
		get: function () {
			return minotaur_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MONA_LISA', {
		enumerable: true,
		get: function () {
			return monaLisa_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MOOGHIDJIRAH', {
		enumerable: true,
		get: function () {
			return mooghidjirah_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MOOJIRA', {
		enumerable: true,
		get: function () {
			return moojira_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'MULE', {
		enumerable: true,
		get: function () {
			return mule_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'NYAN', {
		enumerable: true,
		get: function () {
			return nyan_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'OCTOPUS', {
		enumerable: true,
		get: function () {
			return octopus_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'OKAZU', {
		enumerable: true,
		get: function () {
			return okazu_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'OWL', {
		enumerable: true,
		get: function () {
			return owl_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PAWN', {
		enumerable: true,
		get: function () {
			return pawn_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PERIODIC_TABLE', {
		enumerable: true,
		get: function () {
			return periodicTable_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PERSONALITY_SPHERE', {
		enumerable: true,
		get: function () {
			return personalitySphere_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PINBALL_MACHINE', {
		enumerable: true,
		get: function () {
			return pinballMachine_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PSYCHIATRICHELP2', {
		enumerable: true,
		get: function () {
			return psychiatrichelp2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PSYCHIATRICHELP', {
		enumerable: true,
		get: function () {
			return psychiatrichelp_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'PTERODACTYL', {
		enumerable: true,
		get: function () {
			return pterodactyl_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'QUEEN', {
		enumerable: true,
		get: function () {
			return queen_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'R2_D2', {
		enumerable: true,
		get: function () {
			return R2D2_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'RADIO', {
		enumerable: true,
		get: function () {
			return radio_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'RENGE', {
		enumerable: true,
		get: function () {
			return renge_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ROBOT', {
		enumerable: true,
		get: function () {
			return robot_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ROBOTFINDSKITTEN', {
		enumerable: true,
		get: function () {
			return robotfindskitten_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ROFLCOPTER', {
		enumerable: true,
		get: function () {
			return roflcopter_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ROOK', {
		enumerable: true,
		get: function () {
			return rook_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SACHIKO', {
		enumerable: true,
		get: function () {
			return sachiko_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SEAHORSE_BIG', {
		enumerable: true,
		get: function () {
			return seahorseBig_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SEAHORSE', {
		enumerable: true,
		get: function () {
			return seahorse_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SHIKATO', {
		enumerable: true,
		get: function () {
			return shikato_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SHRUG', {
		enumerable: true,
		get: function () {
			return shrug_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SMILING_OCTOPUS', {
		enumerable: true,
		get: function () {
			return smilingOctopus_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SNOOPY', {
		enumerable: true,
		get: function () {
			return snoopy_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SNOOPYHOUSE', {
		enumerable: true,
		get: function () {
			return snoopyhouse_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SNOOPYSLEEP', {
		enumerable: true,
		get: function () {
			return snoopysleep_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SPIDERCOW', {
		enumerable: true,
		get: function () {
			return spidercow_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SQUID', {
		enumerable: true,
		get: function () {
			return squid_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'SUDOWOODO', {
		enumerable: true,
		get: function () {
			return sudowoodo_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TABLEFLIP', {
		enumerable: true,
		get: function () {
			return tableflip_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TAXI', {
		enumerable: true,
		get: function () {
			return taxi_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TEMPLATE', {
		enumerable: true,
		get: function () {
			return template_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'THREADER', {
		enumerable: true,
		get: function () {
			return threader_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'THREECUBES', {
		enumerable: true,
		get: function () {
			return threecubes_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TOASTER', {
		enumerable: true,
		get: function () {
			return toaster_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TORTOISE', {
		enumerable: true,
		get: function () {
			return tortoise_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TUX_BIG', {
		enumerable: true,
		get: function () {
			return tuxBig_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'TWEETY_BIRD', {
		enumerable: true,
		get: function () {
			return tweetyBird_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'USA', {
		enumerable: true,
		get: function () {
			return USA_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'VADER', {
		enumerable: true,
		get: function () {
			return vader_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'WEEPING_ANGEL', {
		enumerable: true,
		get: function () {
			return weepingAngel_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'WIZARD', {
		enumerable: true,
		get: function () {
			return wizard_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'WOOD', {
		enumerable: true,
		get: function () {
			return wood_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'WORLD', {
		enumerable: true,
		get: function () {
			return world_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_01', {
		enumerable: true,
		get: function () {
			return yasuna_01_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_02', {
		enumerable: true,
		get: function () {
			return yasuna_02_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_03A', {
		enumerable: true,
		get: function () {
			return yasuna_03a_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_03', {
		enumerable: true,
		get: function () {
			return yasuna_03_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_04', {
		enumerable: true,
		get: function () {
			return yasuna_04_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_05', {
		enumerable: true,
		get: function () {
			return yasuna_05_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_06', {
		enumerable: true,
		get: function () {
			return yasuna_06_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_07', {
		enumerable: true,
		get: function () {
			return yasuna_07_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_08', {
		enumerable: true,
		get: function () {
			return yasuna_08_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_09', {
		enumerable: true,
		get: function () {
			return yasuna_09_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_10', {
		enumerable: true,
		get: function () {
			return yasuna_10_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_11', {
		enumerable: true,
		get: function () {
			return yasuna_11_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_12', {
		enumerable: true,
		get: function () {
			return yasuna_12_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_13', {
		enumerable: true,
		get: function () {
			return yasuna_13_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_14', {
		enumerable: true,
		get: function () {
			return yasuna_14_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_16', {
		enumerable: true,
		get: function () {
			return yasuna_16_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_17', {
		enumerable: true,
		get: function () {
			return yasuna_17_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_18', {
		enumerable: true,
		get: function () {
			return yasuna_18_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_19', {
		enumerable: true,
		get: function () {
			return yasuna_19_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YASUNA_20', {
		enumerable: true,
		get: function () {
			return yasuna_20_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'YMD_UDON', {
		enumerable: true,
		get: function () {
			return ymd_udon_cow__default['default'];
		}
	});
	Object.defineProperty(exports, 'ZEN_NOH_MILK', {
		enumerable: true,
		get: function () {
			return zenNohMilk_cow__default['default'];
		}
	});
	exports.BEAVIS_ZEN = beavis_zen;
	exports.BONG = bong;
	exports.BUD_FROGS = budFrogs;
	exports.BUNNY = bunny;
	exports.CHEESE = cheese;
	exports.COWER = cower;
	exports.DAEMON = daemon;
	exports.DEFAULT = DEFAULT_COW;
	exports.DOGE = doge;
	exports.DRAGON = dragon;
	exports.DRAGON_AND_COW = dragonAndCow;
	exports.ELEPHANT_IN_SNAKE = elephantInSnake;
	exports.EYES = eyes;
	exports.FLAMING_SHEEP = flamingSheep;
	exports.GHOSTBUSTERS = ghostbusters;
	exports.GOAT = goat;
	exports.HEDGEHOG = hedgehog;
	exports.HELLOKITTY = hellokitty;
	exports.KISS = kiss;
	exports.KITTY = kitty;
	exports.KOALA = koala;
	exports.KOSH = kosh;
	exports.LUKE_KOALA = lukeKoala;
	exports.MECH_AND_COW = mechAndCow;
	exports.MEOW = meow;
	exports.MILK = milk;
	exports.MOOFASA = moofasa;
	exports.MOOSE = moose;
	exports.MUTILATED = mutilated;
	exports.REN = ren;
	exports.SATANIC = satanic;
	exports.SHEEP = sheep;
	exports.SKELETON = skeleton;
	exports.SMALL = small;
	exports.SQUIRREL = squirrel;
	exports.STEGOSAURUS = stegosaurus;
	exports.STIMPY = stimpy;
	exports.SUPERMILKER = supermilker;
	exports.SURGERY = surgery;
	exports.TELEBEARS = telebears;
	exports.TURKEY = turkey;
	exports.TURTLE = turtle;
	exports.TUX = tux;
	exports.VADER_KOALA = vaderKoala;
	exports.WHALE = whale;
	exports.WWW = www;
	exports.say = say$1;
	exports.think = think$1;

	Object.defineProperty(exports, '__esModule', { value: true });

})));
