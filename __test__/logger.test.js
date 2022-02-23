'use strict';
const logger=require('../src/middlewares/logger.js');


describe('logger middlewares', ()=>{
  let consoleSpy;
  const req={method:'get',path:'test'};
  const res={};
  const next=jest.fn();

  beforeEach(()=>{
    consoleSpy=jest.spyOn(console, 'log').mockImplementation();
  });

  afterEach(()=>{
    consoleSpy.mockRestore(); 
  });
  it ('should log all get requests',()=>{
    logger(req,res,next);
    expect (consoleSpy).toHaveBeenCalledWith('request information','get','test');
    expect (next).toHaveBeenCalledWith();
  });

});