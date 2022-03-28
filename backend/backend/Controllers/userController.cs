using backend.Model;
using backend.Services;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class userController : ControllerBase
    {
        private readonly IUserDetailService userDetailService;

        public userController(IUserDetailService userDetailService)
        {
            this.userDetailService = userDetailService;
        }
        // GET: api/<userController>
        [HttpGet]
        public ActionResult<List<Userdetail>> Get()
        {
            return userDetailService.Get();
        }

        // GET api/<userController>/5
        [HttpGet("{id}")]
        public ActionResult<Userdetail> Get(string id)
        {
            var userdetail = userDetailService.Get(id);
            if(userdetail == null)
            {
                return NotFound($"Userdetail with Id ={id} not found");
            }
            return userdetail;
        }

        // POST api/<userController>
        [HttpPost]
        public ActionResult<Userdetail> Post([FromBody] Userdetail userdetail)
        {
            userDetailService.Create(userdetail);
            return CreatedAtAction(nameof(Get), new { id = userdetail.Id }, userdetail);
        }

        // PUT api/<userController>/5
        [HttpPut("{id}")]
        public ActionResult Put(string id, [FromBody] Userdetail userdetail)
        {
            var existingUserdetail = userDetailService.Get(id);

            if(existingUserdetail == null)
            {
                return NotFound($"Userdetail with Id = {id} not found");
            }
            userDetailService.Update(id, userdetail);

            return NoContent();
        }

        // DELETE api/<userController>/5
        [HttpDelete("{id}")]
        public ActionResult Delete(string id)
        {
            var userdetail = userDetailService.Get(id);
            if(userdetail == null)
            {
                return NotFound($"Userdetail with Id ={id} not found");
            }
            userDetailService.Remove(userdetail.Id);

            return Ok($"Userdetail with Id = {id} deleted");
        }
    }
}
