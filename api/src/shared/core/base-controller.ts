import {Request ,Response } from 'express';
/**
 * @param  {Request} req
 * @param  {Response} res
 */
export abstract class BaseController {
  /**
   * This is the implementation that we will leave to the
   * subclasses to figure out.
   */

  protected abstract executeImpl(
    req: Request,
    res: Response
  ): Promise<void | any>;

  /**
   * This is what we will call on the route handler.
   * We also make sure to catch any uncaught errors in the
   * implementation.
   */
  /** executes the requested endpoint  query
   * @param  {Request} req
   * @param  {Response} res
   */
  public async execute(req: Request, res: Response): Promise<void |any> {
    try {
      await this.executeImpl(req, res);
    } catch (err) {
      console.log(`[BaseController]: Uncaught controller error`);
      console.log(err);
      this.fail(res, 'An unexpected error occurred');
    }
  }
  /**
   * @param  {Response} res
   * @param  {number} code
   * @param  {string} message
   * @return {Response}
   */
  public static jsonResponse(res: Response, code: number, message: string) {
    return res.status(code).json({ message });
  }
  /**
   * @param  {Response} res
   * @param  {T} dto?
   * @return {Response}

   */
  public ok<T>(res: Response, dto?: T) {
    if (!!dto) {
      res.type('application/json');
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }
  /**
   * @param  {Response} res
   * @return {Response}
   */
  public created(res: Response) {
    return res.sendStatus(201);
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public clientError(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      400,
      message ? message : 'Unauthorized'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public unauthorized(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      401,
      message ? message : 'Unauthorized'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public paymentRequired(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      402,
      message ? message : 'Payment required'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public forbidden(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      403,
      message ? message : 'Forbidden'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public notFound(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      404,
      message ? message : 'Not found'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public conflict(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      409,
      message ? message : 'Conflict'
    );
  }
  /**
   * @param  {Response} res
   * @param  {string} message?
   * @return {Response}
   */
  public tooMany(res: Response, message?: string) {
    return BaseController.jsonResponse(
      res,
      429,
      message ? message : 'Too many requests'
    );
  }
  /**
   * @param  {Response} res
   * @return {Response}
   */
  public todo(res: Response) {
    return BaseController.jsonResponse(res, 400, 'TODO');
  }
  /**
   * @param  {Response} res
   * @param  {Error|string} error
   * @return {Response}
   */
  public fail(res: Response, error: Error | string) {
    return res.status(500).json({
      message: error.toString(),
    });
  }
  
}
