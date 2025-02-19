import { Request, Response, NextFunction } from 'express';

import Proficiency from '../../models/proficiency/index.js';
import Race from '../../models/race/index.js';
import { ResourceList } from '../../util/data.js';
import SimpleController from '../simpleController.js';
import Subrace from '../../models/subrace/index.js';
import Trait from '../../models/trait/index.js';

const simpleController = new SimpleController(Race);

export const index = async (req: Request, res: Response, next: NextFunction) =>
  simpleController.index(req, res, next);
export const show = async (req: Request, res: Response, next: NextFunction) =>
  simpleController.show(req, res, next);
export const create = async (req: Request, res: Response, next: NextFunction) => 
  simpleController.create(req, res, next);
export const update = async (req: Request, res: Response, next: NextFunction) =>
  simpleController.update(req, res, next);
export const destroy = async (req: Request, res: Response, next: NextFunction) =>
  simpleController.destroy(req, res, next);

export const showSubracesForRace = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const urlString = '/api/races/' + req.params.index;

    const data = await Subrace.find({ 'race.url': urlString }).select({
      index: 1,
      name: 1,
      url: 1,
      _id: 0,
    });
    return res.status(200).json(ResourceList(data));
  } catch (err) {
    next(err);
  }
};

export const showTraitsForRace = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const urlString = '/api/races/' + req.params.index;

    const data = await Trait.find({ 'races.url': urlString }).select({
      index: 1,
      name: 1,
      url: 1,
      _id: 0,
    });
    return res.status(200).json(ResourceList(data));
  } catch (err) {
    next(err);
  }
};

export const showProficienciesForRace = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const urlString = '/api/races/' + req.params.index;

    const data = await Proficiency.find({ 'races.url': urlString })
      .select({ index: 1, name: 1, url: 1, _id: 0 })
      .sort({ index: 'asc' });
    return res.status(200).json(ResourceList(data));
  } catch (err) {
    next(err);
  }
};
