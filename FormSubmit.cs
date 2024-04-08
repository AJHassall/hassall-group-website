using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Azure.Functions.Worker;
using Microsoft.Extensions.Logging;

namespace Hassall.FormSubmit
{
    public class FormSubmit
    {
        private readonly ILogger<FormSubmit> _logger;

        public FormSubmit(ILogger<FormSubmit> logger)
        {
            _logger = logger;
        }

        [Function("FormSubmit")]
        public IActionResult Run([HttpTrigger(AuthorizationLevel.Anonymous, "get", "post")] HttpRequest req)
        {
            _logger.LogInformation("C# HTTP trigger function processed a request.");
            return new OkObjectResult("Welcome to Azure Functions!");
        }
    }
}
