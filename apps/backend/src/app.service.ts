import { Injectable } from '@nestjs/common';
import { Octokit } from '@octokit/rest';

@Injectable()
export class AppService {
  async getGists(): Promise<any> {
    const octokit = new Octokit({
      auth: "git_token"
      
    })
    const response = await octokit.request("GET /gists", {
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    console.log(response);
    return response;
  }

  async getGistById(id: number): Promise<any> {
    const octokit = new Octokit({
      auth: "git_token"
      
    })

    console.log(id);
    const response = await octokit.request(`GET /gists/${id}`, {
      gist_id: 'GIST_ID',
      headers: {
        'X-GitHub-Api-Version': '2022-11-28'
      }
    });
    // const json = await response.json();
    console.log("========================");
    console.log(response);
    return response;
  }
}
