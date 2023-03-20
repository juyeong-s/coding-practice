import sys

input = sys.stdin.readline

if __name__ == "__main__":
    n = int(input())
    board = [list(map(int, input().split())) for _ in range(n)]
    maxDp, minDp = [0] * 3, [0] * 3

    for i in range(n):
        max0, max1, max2 = maxDp
        maxDp = [
            max(max0, max1) + board[i][0],
            max(max0, max1, max2) + board[i][1],
            max(max1, max2) + board[i][2]
        ]

        min0, min1, min2 = minDp
        minDp = [
            min(min0, min1) + board[i][0],
            min(min0, min1, min2) + board[i][1],
            min(min1, min2) + board[i][2]
        ]
    
    print(max(maxDp), min(minDp))
