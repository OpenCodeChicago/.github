
// In-memory sample data
const mentors = [
  { id: 1, name: 'Alice', expertise: ['JavaScript', 'Node.js'] },
  { id: 2, name: 'Bob', expertise: ['Python', 'Django'] },
]

/**
 * @openapi
 * components:
 *   schemas:
 *     Mentor:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           example: 1
 *         name:
 *           type: string
 *           example: Alice
 *         expertise:
 *           type: array
 *           items:
 *             type: string
 *           example: ["JavaScript", "Node.js"]
 */

/**
 * @openapi
 * /mentors:
 *   get:
 *     summary: Get all mentors
 *     tags:
 *       - Mentors
 *     responses:
 *       200:
 *         description: List of mentors
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Mentor'
 */
router.get('/', (req, res) => {
  res.json(mentors)
})

/**
 * @openapi
 * /mentors/{id}:
 *   get:
 *     summary: Get mentor by id
 *     tags:
 *       - Mentors
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Mentor object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Mentor'
 *       404:
 *         description: Mentor not found
 */
router.get('/:id', (req, res) => {
  const id = Number(req.params.id)
  const mentor = mentors.find((m) => m.id === id)
  if (!mentor) return res.status(404).json({ message: 'Mentor not found' })
  res.json(mentor)
})

module.exports = router
