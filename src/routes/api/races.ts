import * as RaceController from '../../controllers/api/raceController.js';
import * as express from 'express';

const router = express.Router();

router.get('/', function(req, res, next) {
  RaceController.index(req, res, next);
});

router.get('/:index', function(req, res, next) {
  RaceController.show(req, res, next);
});

router.post('/', function(req, res, next) {
  RaceController.create(req, res, next);
});

router.put('/:index', function(req, res, next) {
  RaceController.update(req, res, next);
});

router.delete('/:index', function(req, res, next) {
  RaceController.destroy(req, res, next);
});

router.get('/:index/subraces', RaceController.showSubracesForRace);
router.get('/:index/proficiencies', RaceController.showProficienciesForRace);
router.get('/:index/traits', RaceController.showTraitsForRace);

export default router;
