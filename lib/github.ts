export type GitHubRepo = {
  id: number
  name: string
  html_url: string
  description: string | null
  stargazers_count: number
  forks_count: number
  updated_at: string
}

export async function getAllRepos(
  username: string
): Promise<GitHubRepo[]> {
  const repos: GitHubRepo[] = []
  let page = 1

  while (true) {
    const res = await fetch(
      `https://api.github.com/users/${username}/repos?per_page=100&page=${page}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
          Accept: "application/vnd.github+json",
        },
        cache: "no-store",
      }
    )

    if (!res.ok) {
      throw new Error(`GitHub API failed: ${res.status}`)
    }

    const data: GitHubRepo[] = await res.json()
    if (data.length === 0) break

    repos.push(...data)
    page++
  }

  // 🔥 Sort newest → oldest by last activity
  repos.sort(
    (a, b) =>
      new Date(b.updated_at).getTime() -
      new Date(a.updated_at).getTime()
  )

  return repos
}
